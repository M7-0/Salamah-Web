# Repository Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the local repository to `https://github.com/M7-0/M7-0.github.io.git` while preserving all local changes.

**Architecture:** Use a "Merge Histories" strategy. Commit all local state first, rename the branch to `main`, update the remote origin, fetch the new history, and merge with `--allow-unrelated-histories`.

**Tech Stack:** Git, PowerShell (CLI)

---

### Task 1: Safeguard Local Changes

**Files:**
- Modify: All tracked files with local changes (index.html, styles/main.css, etc.)
- Add: All untracked files in the workspace.

- [ ] **Step 1: Stage all changes**
Run: `git add .`

- [ ] **Step 2: Commit local state**
Run: `git commit -m "chore: snapshot local state before migration"`

- [ ] **Step 3: Verify clean working directory**
Run: `git status`
Expected: "nothing to commit, working tree clean"

---

### Task 2: Align Branch and Remote

**Files:**
- Modify: `.git/config` (via git commands)

- [ ] **Step 1: Rename local branch to main**
Run: `git branch -m main`

- [ ] **Step 2: Update remote origin URL**
Run: `git remote set-url origin https://github.com/M7-0/M7-0.github.io.git`

- [ ] **Step 3: Verify remote update**
Run: `git remote -v`
Expected: origin points to `M7-0.github.io.git`

---

### Task 3: Integrate Histories

**Files:**
- Modify: Project files (during merge)

- [ ] **Step 1: Fetch remote history**
Run: `git fetch origin`

- [ ] **Step 2: Merge remote main into local main**
Run: `git merge origin/main --allow-unrelated-histories`
Expected: Possible conflicts in `index.html`.

- [ ] **Step 3: Resolve conflicts (if any)**
If conflicts occur, manually inspect `index.html` and other flagged files. Keep the desired content from both branches.

- [ ] **Step 4: Commit the merge**
Run: `git add .`
Run: `git commit -m "chore: merge unrelated histories from M7-0.github.io"`

---

### Task 4: Finalize and Push

- [ ] **Step 1: Push to new origin**
Run: `git push -u origin main`

- [ ] **Step 2: Verify remote state**
Run: `git status`
Expected: "Your branch is up to date with 'origin/main'."
