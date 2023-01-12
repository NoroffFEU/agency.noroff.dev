# This will show you how you will branch from your respective work branch. 

Each team has their own main working branch `FE-Offers` `FE-Listing` etc. 
From this main working branch each dev will make the branch for the task their working on. 

ex: 
Ola nordman is working on creating listener for createOffer. Ola will then create a branch from `FE-Offers` that is named 
```
FE-Offers-createOfferListener
```
and then add the file for the listener in that branch. 
This will give a more sense of ownership, easier for the general overview when you know who has been working on something,
rather then spending time figure out who has worked on what files. 


## Commits
It's important that you commit your work regularly, and you are to use descriptive commit messages. Not like : Added something, fixed a thing. 
Use messages like : Created function "name your function" this is for "name what it's for", (if it's working state it in the text, if it's not working state it)
We do love descriptive commit texts. 

When commiting trough the code editor terminal, you can write a longer text for message then you can in gitHub desktop. Use this as an advantage for your self. 

---

### Some terminal snippets if you dont remember them : 

git add 
```
git add <name-of-file>
``` 
this will add the file you type in to the stage commits, so that you can write a commmit text. 

view the status to view what we staged 
```
git status
``` 

add commit text and commit to the repo 
```
git commit -m "your descriptive commit text goes here"
``` 

---

### View all branches in terminal : 

```
git branch --all
``` 

you will get a list of all branches, normally use this after you created a new branch to check it was created correctly. 

---

### Create new branch in terminal : 

```
git branch FE-Offers-createOfferListener
``` 

---

## Important that you are in the main working branch for your team ex: FE-Application
To be sure you are in the right branch you can use 
```
git checkout nameOfBranch
``` 
this will put you in the correct branch befor you make a new branch for your task. 

This can also be done in one line by use of one command. 
```
git checkout -b FE-Application-nameOfTaskHere
``` 

You should never be working in the main/master branch of the repo it self. Always make sure you are in the correct team work branch.
If you do make a mistake and create a branch from main/master branch, make your scrum master aware of this, they will sort it out and get it deleted.

For deleting a branch you can use 
```
git branch -d nameOfBranchToDelete
```

If a branch does not contain any changes that have not already been merged into the default branch - it is safe to delete. 
If the branch contains changes that have not yet been merged into the default branch - it is not safe to delete.

## Merge

When your work is ready for testing, QA engineers will make PR's and run tests, if approved the QA engineer will merge the branch into teams main working branch.
All merges into main/master should be approved by a reviewer, if all is approved then the code goes into main/master for production. This is also something QA does.

Merging is not a thing the devs will do unless asked to or told to do it. 

Happy branching and coding. If there is any questions or issues please contact your scrum master. 