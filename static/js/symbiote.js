function initSymbiote() {
  const existingCanvas = document.getElementById('symbiote-canvas');
  if (existingCanvas && existingCanvas.dataset.symbioteReady === 'true') return;
  if (existingCanvas) existingCanvas.remove();
  const existingMark = document.getElementById('symbiote-mark');
  if (existingMark) existingMark.remove();

  const mark = document.createElement('div');
  mark.id = 'symbiote-mark';
  let position;
  try {
    position = JSON.parse(sessionStorage.getItem('symbiote-position'));
    if (!position || !Number.isFinite(position.x) || !Number.isFinite(position.y)) {
      position = { x: Math.random(), y: Math.random() };
      sessionStorage.setItem('symbiote-position', JSON.stringify(position));
    }
  } catch {
    position = { x: Math.random(), y: Math.random() };
  }
  const markLeft = position.x * Math.max(0, window.innerWidth - 200);
  const markTop = position.y * Math.max(0, window.innerHeight - 50);
  mark.style.cssText = `position: absolute; top: ${markTop + window.scrollY}px; left: ${markLeft + window.scrollX}px; width: 200px; height: 50px; z-index: -1;`;
  document.body.appendChild(mark);

  const canvas = document.createElement('canvas');
  canvas.id = 'symbiote-canvas';
  const backgroundLayer = document.getElementById('particles-js');
  if (backgroundLayer) {
    canvas.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: -1;";
    backgroundLayer.insertAdjacentElement('afterend', canvas);
  } else {
    canvas.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: -1;";
    document.body.appendChild(canvas);
  }

  const clamp = (x, low, high) => Math.max(low, Math.min(high, x));
  
  function creep(point, x, y, step) {
    const dx = x - point.x; const dy = y - point.y;
    const distance = Math.hypot(dx, dy);
    if (distance <= step) { point.x = x; point.y = y; } 
    else { point.x += (dx / distance) * step; point.y += (dy / distance) * step; }
  }

  const CELL = 2, CRAWL = 0.6, SHORT = 0.35, SPACING = 0.12;
  const BODY = [0.17, 0.16, 0.14, 0.11, 0.09];
  const LEGS = 6, REACH = 0.6, VEINS = 40, VEIN_STEP = 0.11;

  let savedState = null;
  try {
    const storedState = JSON.parse(sessionStorage.getItem('symbiote-state'));
    if (
      storedState &&
      Array.isArray(storedState.body) && storedState.body.length === BODY.length &&
      Array.isArray(storedState.legs) && storedState.legs.length === LEGS &&
      Array.isArray(storedState.veins) && Array.isArray(storedState.tendrils) &&
      Array.isArray(storedState.turning) && storedState.turning.length === 6 &&
      Number.isFinite(storedState.time) && Number.isFinite(storedState.savedAt) &&
      Number.isInteger(storedState.randomState)
    ) savedState = storedState;
  } catch {}

  let randomState = savedState?.randomState ?? Math.floor(Math.random() * 0x100000000);
  const random = () => {
    randomState = (Math.imul(1664525, randomState) + 1013904223) >>> 0;
    return randomState / 0x100000000;
  };
  let simulationTime = savedState?.time ?? 0;
  const simulationOffset = savedState
    ? savedState.time + Math.max(0, (Date.now() - savedState.savedAt) / 1000) - performance.now() / 1000
    : 0;

  function symbiote(canvas, mark, state = savedState) {
    const next = random;
    const unit = canvas.width / (canvas.clientWidth || 1);
    const width = 100; 
    const cell = Math.max(1, Math.round(CELL * unit));
    const nx = Math.ceil(canvas.width / cell);
    const ny = Math.ceil(canvas.height / cell);
    
    const grid = document.createElement('canvas');
    grid.width = nx; grid.height = ny;
    const gridCtx = grid.getContext('2d', { willReadFrequently: true });
    if (!gridCtx) throw new Error('Unable to create the Symbiote rendering context.');
    const image = gridCtx.createImageData(nx, ny);
    const pixels = image.data;
    const field = new Float32Array(nx * ny);
    const span = width / cell;

    const body = state ? state.body.map((point) => ({ ...point })) : BODY.map(() => ({ x: 0, y: 0 }));
    const head = body[0];
    const legs = state ? state.legs.map((leg) => ({ ...leg })) : Array.from({ length: LEGS }, (_, k) => {
      const angle = (k / LEGS) * Math.PI * 2;
      const x = Math.cos(angle) * 0.35, y = Math.sin(angle) * 0.35;
      return { x, y, fromX: x, fromY: y, toX: x, toY: y, lift: 1 };
    });
    
    const veins = state ? state.veins : [], tendrils = state ? state.tendrils : [];
    let heading = state?.heading ?? 0, moving = state?.moving ?? 0;
    let lastVein = state?.lastVein ?? { x: 0, y: 0 };
    const turning = state ? state.turning : Array.from({ length: 6 }, (_, k) => ({
      orbit: 0.15 + next() * 0.08, r: 0.08 + next() * 0.045,
      phase: (k / 6) * Math.PI * 2 + next(), speed: (0.25 + next() * 0.2) * (k % 2 ? -1 : 1),
    }));
    
    let nextTendril = state?.nextTendril ?? 0.4;
    let sag = state?.sag ?? 0, sagSpeed = state?.sagSpeed ?? 0;
    let lightX = state?.lightX ?? -0.55, lightY = state?.lightY ?? -0.65;
    let ink = [20, 20, 20], paper = [255, 255, 255], wasDark;
    let previousBounds = null;

    const lash = (time, angle, quick) => {
      if (tendrils.length >= 6) return;
      tendrils.push({ angle, born: time, life: quick ? 0.9 + next() * 0.5 : 1.4 + next(), length: 0.4 + next() * 0.25, curl: (next() - 0.5) * 2.4 });
    };

    const spread = (time, x, y, angle, steps) => {
      if (veins.length >= VEINS) return;
      const points = [[x, y]];
      let a = angle;
      for (let k = 0; k < steps; k++) {
        a += (next() - 0.5) * 1.1; x += Math.cos(a) * VEIN_STEP; y += Math.sin(a) * VEIN_STEP; points.push([x, y]);
        if (k > 1 && k < steps - 2 && next() < 0.18 && veins.length < VEINS - 1) {
          veins.push({ points: [[x, y]], born: time + k * 0.12, life: 5 + next() * 3 });
          let bx = x, by = y, b = a + (next() < 0.5 ? 1 : -1) * (0.6 + next() * 0.5);
          for (let j = 0; j < steps - k - 1; j++) {
            b += (next() - 0.5) * 1.1; bx += Math.cos(b) * VEIN_STEP * 0.8; by += Math.sin(b) * VEIN_STEP * 0.8;
            veins[veins.length - 1].points.push([bx, by]);
          }
        }
      }
      veins.push({ points, born: time, life: 6 + next() * 3 });
    };

    return {
      snapshot() {
        return { body, legs, veins, tendrils, heading, moving, lastVein, turning, nextTendril, sag, sagSpeed, lightX, lightY };
      },
      frame(f) {
        const { ctx, time, delta, dark, scroll } = f;
        const step = Math.min(delta * 60, 3);
        const ox = f.origin.x / cell, oy = f.origin.y / cell;
        
        if (dark !== wasDark) {
          ink = dark ? [220, 220, 220] : [20, 20, 20]; 
          paper = dark ? [20, 20, 19] : [255, 255, 255];
          wasDark = dark;
        }

        const pointer = f.pointer && { x: (f.pointer.x / cell - ox) / span, y: (f.pointer.y / cell - oy) / span };
        let goalX = 0, goalY = 0;
        if (pointer) {
          const distance = Math.hypot(pointer.x - head.x, pointer.y - head.y);
          const stop = Math.max(0, distance - SHORT) / (distance || 1);
          goalX = head.x + (pointer.x - head.x) * stop; goalY = head.y + (pointer.y - head.y) * stop;
        }
        
        const inch = 0.25 + 0.75 * Math.max(0, Math.sin(time * 3.2)) ** 2;
        const wasX = head.x, wasY = head.y;
        creep(head, goalX, goalY, CRAWL * inch * delta);
        const moved = Math.hypot(head.x - wasX, head.y - wasY);
        if (moved > 1e-5) heading = Math.atan2(head.y - wasY, head.x - wasX);
        moving += ((moved > 1e-5 ? 1 : 0) - moving) * Math.min(1, delta * 3);
        
        for (let k = 1; k < body.length; k++) {
          const ahead = body[k - 1], round = body[k];
          const gap = Math.hypot(ahead.x - round.x, ahead.y - round.y);
          if (gap > SPACING) creep(round, ahead.x, ahead.y, gap - SPACING);
          creep(round, ahead.x, ahead.y, 0.06 * delta);
        }

        const hx = ox + head.x * span, hy = oy + head.y * span;

        for (const [k, leg] of legs.entries()) {
          const far = Math.hypot(leg.x - head.x, leg.y - head.y) > REACH;
          if (leg.lift >= 1 && (far || (moving < 0.3 && next() < 0.003 * step))) {
            const ahead = moving > 0.3;
            const angle = ahead ? heading + (k - (LEGS - 1) / 2) * 0.42 + (next() - 0.5) * 0.4 : (k / LEGS) * Math.PI * 2 + time * 0.2 + (next() - 0.5) * 0.6;
            const reach = ahead ? 0.45 + next() * 0.2 : 0.3 + next() * 0.15;
            leg.fromX = leg.x; leg.fromY = leg.y;
            leg.toX = head.x + Math.cos(angle) * reach; leg.toY = head.y + Math.sin(angle) * reach;
            leg.lift = 0;
          }
          if (leg.lift < 1) {
            leg.lift = Math.min(1, leg.lift + delta * 3.5);
            const e = 1 - (1 - leg.lift) ** 3;
            leg.x = leg.fromX + (leg.toX - leg.fromX) * e; leg.y = leg.fromY + (leg.toY - leg.fromY) * e;
          }
        }

        const tail = body[body.length - 1];
        if (Math.hypot(head.x - lastVein.x, head.y - lastVein.y) > 0.18) {
          lastVein = { x: head.x, y: head.y };
          for (let k = 0; k < 2; k++) spread(time, tail.x, tail.y, heading + Math.PI + (next() - 0.5) * 2.6, 8);
        } else if (moving < 0.3 && next() < 0.008 * step) { spread(time, head.x, head.y, next() * Math.PI * 2, 6); }

        let target = null;
        if (pointer) {
          const distance = Math.hypot(pointer.x - head.x, pointer.y - head.y);
          if (distance < 1.3) target = { angle: Math.atan2(pointer.y - head.y, pointer.x - head.x), distance };
        }

        if (time >= nextTendril) {
          lash(time, target ? target.angle + (next() - 0.5) * 0.7 : next() * Math.PI * 2, !!target);
          nextTendril = time + (target ? 0.18 : 0.5 + next() * 0.7);
        }

        const shove = clamp(scroll / width, -0.3, 0.3);
        sagSpeed += shove * 0.06 - sag * 0.012 * step - sagSpeed * 0.06 * step;
        sag = clamp(sag + sagSpeed * step, -0.12, 0.12);

        const leanX = target ? Math.cos(target.angle) * 0.06 : 0;
        const leanY = target ? Math.sin(target.angle) * 0.06 : 0;
        const lobes = [{ x: 0, y: sag * 0.3, r: 0.16 }];
        
        for (let k = 1; k < body.length; k++) {
          const stretch = clamp(Math.hypot(body[k-1].x - body[k].x, body[k-1].y - body[k].y) / SPACING, 0, 1);
          if (stretch > 0.05) lobes.push({ x: body[k].x - head.x + Math.sin(time * 2 + k) * 0.012, y: body[k].y - head.y + sag * 0.4, r: BODY[k] * stretch * (1 + 0.05 * Math.sin(time * 3.2 - k * 0.6)) });
        }
        for (const [k, lobe] of turning.entries()) {
          const angle = lobe.phase + time * lobe.speed, orbit = lobe.orbit * (1 + 0.3 * Math.sin(time * 0.5 + k));
          lobes.push({ x: Math.cos(angle) * orbit + leanX, y: Math.sin(angle) * orbit + leanY + sag * (0.6 + k * 0.15), r: lobe.r });
        }

        const chains = [];
        for (let i = tendrils.length - 1; i >= 0; i--) {
          const t = tendrils[i], age = (time - t.born) / t.life;
          if (age > 1) { tendrils.splice(i, 1); continue; }
          const out = Math.sin(Math.PI * age) ** 0.55;
          let length = t.length;
          if (target) { t.angle += Math.atan2(Math.sin(target.angle - t.angle), Math.cos(target.angle - t.angle)) * 0.08; length = clamp(target.distance - 0.05, 0.15, 0.75); }
          const dx = Math.cos(t.angle), dy = Math.sin(t.angle), chain = [];
          let px = 0, py = 0;
          for (let k = 0; k <= 12; k++) {
            const q = k / 12, along = 0.1 + q * length * out, off = t.curl * Math.sin(q * 3.2 + time * 5) * q * 0.11 * out;
            const x = dx * along - dy * off, y = dy * along + dx * off, r = (0.085 * (1 - q) ** 1.2 + 0.014) * (0.45 + 0.55 * out);
            if (k) chain.push([px, py, x, y, r]);
            px = x; py = y;
          }
          chains.push(chain);
        }

        for (const [k, leg] of legs.entries()) {
          const dx = leg.x - head.x, dy = leg.y - head.y, length = Math.hypot(dx, dy) || 1;
          const bend = Math.sin(time * 2.5 + k) * 0.04 + (leg.lift < 1 ? Math.sin(leg.lift * Math.PI) * 0.12 : 0);
          const chain = [];
          let px = 0, py = 0;
          for (let j = 1; j <= 8; j++) {
            const q = j / 8, off = Math.sin(q * Math.PI) * bend;
            const x = dx * q - (dy / length) * off, y = dy * q + (dx / length) * off;
            chain.push([px, py, x, y, 0.09 - 0.065 * q]);
            px = x; py = y;
          }
          chains.push(chain);
          lobes.push({ x: dx, y: dy, r: leg.lift < 1 ? 0.025 : 0.055 });
        }

        for (let i = veins.length - 1; i >= 0; i--) {
          const v = veins[i], age = time - v.born;
          if (age > v.life) { veins.splice(i, 1); continue; }
          if (age < 0) continue;
          const shown = Math.max(2, Math.ceil(v.points.length * Math.min(1, age / 1.2))), fade = 1 - Math.max(0, (age - v.life * 0.6) / (v.life * 0.4)), chain = [];
          for (let j = 1; j < shown; j++) {
            const q = j / (v.points.length - 1), [ax, ay] = v.points[j - 1], [bx, by] = v.points[j];
            chain.push([ax - head.x, ay - head.y, bx - head.x, by - head.y, (0.045 - 0.025 * q) * fade]);
          }
          if (chain.length) chains.push(chain);
        }

        let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
        const cover = (x, y) => { left = Math.min(left, x); right = Math.max(right, x); top = Math.min(top, y); bottom = Math.max(bottom, y); };

        const balls = lobes.map((l) => [hx + l.x * span, hy + l.y * span, (l.r * span) ** 2]);
        for (const [bx, by] of balls) cover(bx, by);

        const bounds = chains.map((chain) => {
          let reach = 0, l = Infinity, r = -Infinity, t = Infinity, b = -Infinity;
          for (const [ax, ay, bx, by, rad] of chain) {
            const px = hx + ax * span, py = hy + ay * span, vx = (bx - ax) * span, vy = (by - ay) * span;
            reach = Math.max(reach, rad * span * 3 + 1);
            l = Math.min(l, px, px + vx); r = Math.max(r, px, px + vx);
            t = Math.min(t, py, py + vy); b = Math.max(b, py, py + vy);
          }
          cover(l - reach, t - reach); cover(r + reach, b + reach);
          return [l - reach, r + reach, t - reach, b + reach];
        });

        const segments = chains.map((chain) => chain.map(([ax, ay, bx, by, r]) => {
            const vx = (bx - ax) * span, vy = (by - ay) * span;
            return [hx + ax * span, hy + ay * span, vx, vy, vx * vx + vy * vy || 1e-6, (r * span) ** 2];
        }));

        const margin = span * 0.45 + 4;
        const x0 = Math.max(1, Math.floor(left - margin)), x1 = Math.min(nx - 1, Math.ceil(right + margin));
        const y0 = Math.max(1, Math.floor(top - margin)), y1 = Math.min(ny - 1, Math.ceil(bottom + margin));

        if (previousBounds) {
          for (let y = previousBounds.y0; y < previousBounds.y1; y++) {
            const start = (previousBounds.x0 + y * nx) * 4;
            pixels.fill(0, start, start + (previousBounds.x1 - previousBounds.x0) * 4);
          }
        }

        previousBounds = x0 < x1 && y0 < y1 ? { x0, x1, y0, y1 } : null;
        if (previousBounds) {
          for (let y = y0 - 1; y <= y1; y++) {
            field.fill(0, y * nx + x0 - 1, y * nx + x1 + 1);
          }
        }

        for (let y = y0 - 1; y <= y1; y++) {
          for (let x = x0 - 1; x <= x1; x++) {
            const X = x + 0.5, Y = y + 0.5;
            let sum = 0;
            for (let k = 0; k < balls.length; k++) {
              const ball = balls[k], bx = ball[0], by = ball[1], rr = ball[2];
              const dx = X - bx, dy = Y - by; sum += rr / (dx * dx + dy * dy + 0.01);
            }
            for (let k = 0; k < segments.length; k++) {
              const chain = segments[k], bound = bounds[k];
              const l = bound[0], r = bound[1], t = bound[2], b = bound[3];
              if (X < l || X > r || Y < t || Y > b) continue;
              let most = 0;
              for (let j = 0; j < chain.length; j++) {
                const segment = chain[j];
                const ax = segment[0], ay = segment[1], vx = segment[2];
                const vy = segment[3], vv = segment[4], rr = segment[5];
                const h = clamp(((X - ax) * vx + (Y - ay) * vy) / vv, 0, 1);
                const dx = X - ax - vx * h, dy = Y - ay - vy * h;
                most = Math.max(most, rr / (dx * dx + dy * dy + 0.01));
              }
              sum += most;
            }
            field[x + y * nx] = sum;
          }
        }

        const wantX = target ? clamp(Math.cos(target.angle), -0.9, 0.9) : -0.55;
        const wantY = target ? clamp(Math.sin(target.angle), -0.9, 0.9) : -0.65;
        lightX += (wantX - lightX) * Math.min(1, 0.06 * step); lightY += (wantY - lightY) * Math.min(1, 0.06 * step);
        const lz = 0.75, ll = Math.hypot(lightX, lightY, lz);
        const wx = lightX / ll, wy = lightY / ll, wz = lz / ll + 1, hl = Math.hypot(wx, wy, wz);
        const height = (v) => (v > 1 ? 1 - Math.exp(-(v - 1) * 1.4) : 0), slope = span * 0.28;
        const toward = (amount) => ink.map((c, k) => c + (paper[k] - c) * amount);
        const mid = toward(0.35), glint = toward(0.95);

        for (let y = y0; y < y1; y++) {
          for (let x = x0; x < x1; x++) {
            const at = x + y * nx;
            if (field[at] <= 1) continue;
            const sx = -(height(field[at + 1]) - height(field[at - 1])) * slope;
            const sy = -(height(field[at + nx]) - height(field[at - nx])) * slope;
            const facing = Math.max(0, (sx * wx + sy * wy + wz) / (Math.hypot(sx, sy, 1) * hl));
            const gloss = facing ** 70 * 0.95 + facing ** 14 * 0.1;
            const tone = gloss > 0.45 ? glint : gloss > 0.12 ? mid : ink;
            const p = at * 4;
            pixels[p] = tone[0]; pixels[p + 1] = tone[1]; pixels[p + 2] = tone[2]; pixels[p + 3] = 255;
          }
        }
        
        gridCtx.putImageData(image, 0, 0);
        ctx.clearRect(0, 0, f.width, f.height);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(grid, 0, 0, nx * cell, ny * cell);
      }
    };
  }

  const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resizeCanvas();

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Unable to create the Symbiote canvas context.');
  let currentInst = symbiote(canvas, mark);
  let pointer = null; 
  let lastTime = performance.now();
  let lastScroll = window.scrollY;
  let animationFrame = null;
  let resizeFrame = null;
  const frameInterval = 1000 / 30;
  let lastRenderTime = lastTime - frameInterval;

  window.addEventListener('mousemove', (e) => { 
    pointer = { x: e.clientX, y: e.clientY }; 
  });

  document.addEventListener('mouseleave', () => { 
    pointer = null; 
  });

  function animate(currentTime) {
    animationFrame = null;
    if (document.hidden) return;
    if (currentTime - lastRenderTime < frameInterval) {
      scheduleAnimation();
      return;
    }

    const delta = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    lastRenderTime = currentTime;
    const isDark = document.documentElement.classList.contains('dark');
    
    const currentScroll = window.scrollY;
    const scrollDelta = currentScroll - lastScroll;
    lastScroll = currentScroll;

    const originRect = mark.getBoundingClientRect();

    simulationTime = currentTime / 1000 + simulationOffset;
    currentInst.frame({
      ctx: ctx, time: simulationTime, delta: Math.min(delta, 0.1), dark: isDark, scroll: scrollDelta,
      origin: { x: originRect.left + originRect.width/2, y: originRect.top + originRect.height/2 },
      pointer: pointer, width: canvas.width, height: canvas.height
    });

    scheduleAnimation();
  }

  function scheduleAnimation() {
    if (!document.hidden && animationFrame === null) {
      animationFrame = requestAnimationFrame(animate);
    }
  }

  function pauseAnimation() {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  }

  window.addEventListener('resize', () => {
    if (resizeFrame !== null) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = null;
      resizeCanvas();
      currentInst = symbiote(canvas, mark, currentInst.snapshot());
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pauseAnimation();
      return;
    }
    lastTime = performance.now();
    lastRenderTime = lastTime - frameInterval;
    lastScroll = window.scrollY;
    scheduleAnimation();
  });

  window.addEventListener('pagehide', () => {
    pauseAnimation();
    try {
      sessionStorage.setItem('symbiote-state', JSON.stringify({
        ...currentInst.snapshot(), randomState, time: simulationTime, savedAt: Date.now(),
      }));
    } catch {}
  });
  window.addEventListener('pageshow', () => {
    lastTime = performance.now();
    lastRenderTime = lastTime - frameInterval;
    lastScroll = window.scrollY;
    scheduleAnimation();
  });

  canvas.dataset.symbioteReady = 'true';
  scheduleAnimation();
}

function startSymbiote() {
  if (document.body) initSymbiote();
}

window.addEventListener('load', startSymbiote, { once: true });
window.addEventListener('pageshow', startSymbiote);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startSymbiote, { once: true });
} else {
  startSymbiote();
}