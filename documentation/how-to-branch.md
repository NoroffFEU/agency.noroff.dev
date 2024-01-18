# Branching Guide for Development Teams

## Overview

It's recommended for each development team to have its own main working branch (e.g., `teamName-Offers`, `teamName-Listing`). Developers are encouraged to create task-specific branches from their team's main working branch for their individual tasks. However, it's important to consult with the team leads or teachers before proceeding to ensure alignment with the overall project strategy.

### Important Notes:

- Avoid working directly in the main/master branch. Always use your team's branch.
- If a branch is accidentally created from main/master, inform the scrum master for resolution.

### Example

Ola Nordmann, working on a feature to create a listener for `createOffer`, would:

1. Branch from `teamName-Offers` naming the new branch:
   `teamName-Offers-createOfferListener`
2. Work on the listener feature within this branch.

This approach ensures clarity in ownership and responsibilities, making it easier to track who is working on what, enhancing the overall workflow.

![Branching Format Graphic](https://i.imgur.com/vdOzdpk.png)

## Committing Changes

Regular commits with descriptive messages are crucial. Avoid vague messages like "Added something" or "Fixed a thing." Instead, use clear descriptions, e.g., "Created function [Function Name] for [Purpose]." Indicate whether the function is in a working state in your commit message.

### Tips for Committing:

- Utilize longer commit messages when committing through the code editor terminal compared to GitHub Desktop.

### Terminal Snippets for Git

#### Adding Files for Commit

`git add <name-of-file>`

#### Checking Staged Files

`git status`

#### Committing Changes

`git commit -m "Your descriptive commit text"`

## Branch Management

### Viewing Branches

To view all branches:

`git branch --all`

### Creating a New Branch

Ensure you're in your team's main working branch:

`git checkout nameOfBranch`

Then create a new branch for your task:

`git branch teamName-Offers-createOfferListener`

Or, create and switch to the new branch in one command:

`git checkout -b teamName-Application-nameOfTaskHere`

#### Deleting Branches

`git branch -d nameOfBranchToDelete`

Note: Only delete branches that don't contain unmerged changes.

## Merging

QA engineers will handle merging task branches into the team's main working branch after testing and approval. All merges into the main/master branch should be reviewed and approved.

### Note:

- Developers generally do not perform merges unless specifically instructed.
- Cross-team QA review is encouraged for merges into main/master.

For any questions or issues, please contact your scrum master.

Happy coding and efficient branching!
