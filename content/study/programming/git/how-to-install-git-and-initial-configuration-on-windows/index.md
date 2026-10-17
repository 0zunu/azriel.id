---
title: "How to Install Git and Initial Configuration on Windows"
summary: "Git is software used to manage versioning of program source code. Git is a distributed version control system designed to track changes in source code efficiently."
description: "Git is software used to manage versioning of program source code. Git is a distributed version control system designed to track changes in source code efficiently."
categories: ["Git"]
tags: ["Installation", "Configuration", "Git", "Windows"]
series: ["Git Chapters"]
series_order: 1
date: 2026-10-17T02:02:50+07:00
draft: false
---

## What is Git?

Git is a version control system used by developers to develop software together. The main function of Git is to manage versions of program source code by marking which lines and code need to be added or changed.

## Download Git

Please open the official Git website at [git-scm.com](https://git-scm.com/). Then download Git according to your computer architecture. If you are using 64-bit, download the 64-bit version. Likewise, if you are using 32-bit.

## Steps to Install Git on Windows

Alright, let's begin the installation ritual. Please double-click the downloaded Git installer file.

![langkah1](langkah1.png)

The Git license information will appear. Click `Next >` to continue.

![langkah2](langkah2.png)

Next, choose the installation location. Leave it as default, then click `Next >`.

![langkah3](langkah3.png)

Next is component selection. Leave it as it is and then click `Next >`.

![langkah4](langkah4.png)

Next is the Start Menu folder selection. Click `Next >`.

![langkah5](langkah5.png)

Next is the PATH environment setup. Select the middle option so the `git` command can be recognized in Command Prompt (CMD). Then click `Next >`.

![langkah6](langkah6.png)

Next is line ending conversion. Leave it as default, then click `Next >`.

![langkah7](langkah7.png)

Next is terminal emulator selection. Choose the option at the bottom, then click `Next >`.

![langkah8](langkah8.png)

Next is extra options selection. Just click `Next >`.

![langkah9](langkah9.png)

Next is the experimental options selection. Just click `Install` to begin the installation.

![langkah10](langkah10.png)

Wait a moment while the installation is in progress.

![langkah11](langkah11.png)

Once finished, we can click `Finish`.

![complete](complete.png)

Congratulations, Git is now installed on Windows. To test it, open CMD or PowerShell and type the command `git --version`.

![git-version](git-version.png)

## Initial Configuration You Need to Do

There are several configurations that must be done before starting to use Git, such as setting the name and email.

Please configure it using the following commands.

```bash
git config --global user.name "Your Name"
git config --global user.email "Your Email"
```

Example:

```bash
git config --global user.name "0zunu"
git config --global user.email "fidzlieazriel@gmail.com"
```

Then verify the configuration with the command:

```bash
git config --list
```

If it appears as shown in the following image, the configuration was successful.

![list](list.png)

The `core.editor` configuration is optional, while the name and email are required.

If you have a GitHub, GitLab, Bitbucket, or other account...

then your username and email should match that account to make integration easier.
