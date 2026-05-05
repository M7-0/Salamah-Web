# Design Doc: Repository Migration (Salamah-Web to M7-0.github.io)

**Date:** 2026-05-05
**Topic:** Repo Migration
**Status:** Approved (Pending final review)

## 1. Overview
The project is currently connected to `https://github.com/M7-0/Salamah-Web.git` but needs to be migrated to `https://github.com/M7-0/M7-0.github.io.git`. This migration must preserve local uncommitted changes and integrate them with the existing history of the new repository.

## 2. Success Criteria
- The local repository's remote `origin` points to `https://github.com/M7-0/M7-0.github.io.git`.
- Local changes in `index.html` and `styles/main.css` are preserved and committed.
- Local history is merged with the remote `main` branch.
- The project is successfully pushed to the new remote.
- The default branch is set to `main`.

## 3. Architecture & Approach
We will use the **Merge Histories** strategy:
1. **Commit Local State:** Add all modified and untracked files (excluding environment secrets or local-only configs if any) and create a temporary commit on the current branch (`master`) to safeguard all local modifications.
2. **Branch Renaming:** Rename local `master` to `main` for alignment.
3. **Remote Update:** Update the `origin` URL.
4. **History Fetching:** Fetch the new remote history.
5. **Merging Unrelated Histories:** Use `git merge origin/main --allow-unrelated-histories` to join the two lineages.
6. **Conflict Resolution:** Manually resolve any overlapping file conflicts (expected in `index.html`).
7. **Finalization:** Push the merged state to the new remote.

## 4. Risks & Mitigations
- **Merge Conflicts:** High probability for `index.html`. Mitigation: Careful manual review of changes before finalizing the merge.
- **Data Loss:** Mitigation: All changes will be committed locally *before* any remote operations are performed.

## 5. Testing & Validation
- Run `git remote -v` to confirm the URL change.
- Run `git log` to verify combined history.
- Run `git status` to ensure a clean working tree after push.
