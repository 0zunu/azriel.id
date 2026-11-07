---
title: "Next.js October 2026 Security Update: Executive Summary"
summary: "Next.js released a security update on October 14, 2026 to fix three serious vulnerabilities, including Remote Code Execution and Denial of Service. Review the impact, affected versions, and remediation steps."
description: "Next.js released a security update on October 14, 2026 to fix three serious vulnerabilities, including Remote Code Execution and Denial of Service. Review the impact, affected versions, and remediation steps."
categories: ["security", "next.js"]
tags: ["vulnerability", "RCE", "DoS", "CVE-2026-96889"]
date: 2026-11-05T05:02:50+07:00
draft: false
---

On October 14, 2026, the Next.js team (Vercel) released an out-of-band security patch addressing two critical Remote Code Execution (RCE) vulnerabilities and one high-severity Denial-of-Service (DoS) vulnerability. This update is available in Next.js v16.4.1 (_Active LTS_) and 15.5.28 (_Maintenance LTS_). Two RCEs with a CVSS score of 9.5 allow unauthenticated code execution in the _App Router_ when the `use cache` function returns typed arrays, and in the image optimization API when processing SVG files (CVE-2026-96889). The DoS vulnerability (CVSS 8.2) affects the _App Router_ when using Server _Actions_. None of these issues have a workaround other than upgrading Next.js immediately. This article outlines the technical details of the vulnerabilities, affected versions, practical impact, mitigation steps (upgrade and configuration), developer guidance, Next.js security best practices, and short- and long-term risk analysis. We cite official Next.js sources, GHSA advisories, and community security analyses to support each point.

## Vulnerability Details and Affected Versions

- RCE in `use cache` (_Critical_). This affects Next.js applications using the _App Router_ with _Cache Components_. The `use cache` function that returns multiple typed arrays can be exploited for unauthenticated remote code execution. Affected versions: Next.js 16.0.0 through 16.4.0. Fixed in 16.4.1. There is no alternative solution other than upgrading. Vercel strongly recommends updating immediately even if your app does not use a similar feature.

- RCE in _Image Optimization_ (SVG) (_Critical_, `CVE-2026-96889`). This is a memory bug in the `sharp` library (librsvg) used by the _Image Optimization_ API. When Next.js runs on Linux-based _glibc_ systems, processing an SVG file can trigger unauthenticated code execution. Affected versions: Next.js 10.0.0 through 15.5.27 and 16.0.0 through 16.4.0. Fixed in 15.5.28 and 16.4.1. Temporary mitigation: ensure `sharp` is at version ≥ 0.35.5 (which includes the librsvg fix), or block unnecessary SVG processing.

- DoS in Server Actions (High). This affects the _App Router_ when using Server Actions. A specially crafted request can cause excessive CPU usage (an infinite loop) that blocks other requests, leading to a DoS on the same Node.js process. Affected versions: Next.js 13.0.0 through 15.5.27 and 16.0.0 through 16.4.0. Fixed in 15.5.28 and 16.4.1. Applications using only the Pages Router or without Server Actions are not affected. There is no workaround other than upgrading immediately.

| Vulnerability / CVE                               | Affected Versions                                 | Patched Version | Severity       | Mitigation / Workaround             |
| ------------------------------------------------- | ------------------------------------------------- | --------------- | -------------- | ----------------------------------- |
| RCE: `use cache` returning typed arrays           | Next.js<br> ≥16.0.0 ≤16.4.0                       | 16.4.1          | Critical (9.5) | Upgrade immediately (no workaround) |
| RCE: Image Optimization (SVG) <br> CVE-2026-96889 | Next.js<br> ≥10.0.0 ≤15.5.27;<br> ≥16.0.0 ≤16.4.0 | 15.5.28, 16.4.1 | Critical (9.5) | Ensure `sharp` ≥0.35.5 or upgrade   |
| DoS: Server Actions                               | Next.js<br> ≥13.0.0 ≤15.5.27;<br> ≥16.0.0 ≤16.4.0 | 15.5.28, 16.4.1 | High (8.2)     | Upgrade immediately (no workaround) |

The table above reflects the vulnerable Next.js versions and the latest patched versions that remediate them. Severity ratings (CVSS) are taken from the GHSA advisories. For more technical detail, the GitHub advisories and community reports document the underlying bug mechanisms.

## Practical Impact on Applications

These RCE vulnerabilities are highly dangerous because they allow attackers to execute malicious code on the Next.js server without authentication. For example, the RCE in `use cache` can be triggered by a crafted HTTP request that causes the cache function to return typed arrays. If exploited, an attacker could steal data, alter content, or install backdoors on a production server. Meanwhile, the SVG RCE creates an attack vector through user-uploaded image files, such as via the image API. For the Server Actions DoS, the consequence is a CPU-exhausting flood that can cripple the service until the process is restarted. According to official Next.js sources, applications using the _Pages Router_ (without server actions) are not affected, so developers can reduce exposure by not using the _App Router_ or disabling Server Actions when they are not needed. However, the safest path is to update Next.js to the patched version, because there is no effective mitigation beyond that.

## Step-by-Step Upgrade and Mitigation Guide

The following are the key steps developers should take to close these vulnerabilities:

1. Identify the current Next.js version. Run `npm list next` or check `package.json`.
2. If the version is within the affected range, upgrade immediately to the patched release. Example commands (using npm or Yarn):

```bash
# For the Next.js 15.x branch (Maintenance LTS):
npm install next@15.5.28

# For the Next.js 16.x branch (Active LTS):
npm install next@16.4.1

# (Alternative using Yarn)
yarn add next@16.4.1
```

3. Ensure the `sharp` version is safe (only for Linux-based glibc systems running the image API). If you use Sharp explicitly or as a transitive dependency, upgrade to the latest version ≥0.35.5:

```bash
npm install sharp@0.35.5
# or add it to package.json / use Yarn resolutions:
yarn add sharp@0.35.5
```

This ensures the librsvg library inside `sharp` has been patched.

4. Run regression and application functionality checks. Rebuild the Next.js app and test scenarios involving cache, image optimization, or Server Actions to make sure there are no errors. Confirm that affected API calls and module imports still work correctly.

5. Deploy the updated version to production. Monitor logs and use security tooling (for example, dependency audits) to ensure the vulnerability has been closed.

After upgrading, continue monitoring official Next.js security notifications (blog, GitHub Security) for upcoming patches. Next.js recommends that all LTS users apply patch releases promptly to maintain security.

## References

- _Vercel/Next.js. Next.js Security Update for Upstream Vulnerabilities (October 14, 2026)._
- _Vercel/Next.js. Upcoming Next.js Security Update for Upstream Vulnerabilities (October 8, 2026)._
- _Vercel/Next.js GitHub. Security Advisory GHSA-673q-mjm6-r5xr: Unauthenticated RCE in use cache (October 14, 2026)._
- _Vercel/Next.js GitHub. Security Advisory GHSA-2464-fhr4-w9xw: Unauthenticated RCE in Image Optimization API (SVG) (October 14, 2026)._
- _Vercel/Next.js GitHub. Security Advisory GHSA-p3m5-59mp-jv5r: DoS in App Router using Server Actions (October 14, 2026)._
- _Cloud Security Alliance. Research Note: Next.js Out-of-Band Patch: Critical RCE in use cache and librsvg (October 16, 2026)._
- _Brandefense Research Team. Next.js and Node.js Security Updates, October 2026: What to Patch First (October 21, 2026)._
