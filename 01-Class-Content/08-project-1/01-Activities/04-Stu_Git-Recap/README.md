# Partner Do: Recap git/GitHub

* In this activity you will recap the concepts covered last class. This includes initializing a new repo, adding collaborators, creating branches, and opening a pull request.

## Instructions

* New branches should ALWAYS be made off of the updated master branch.

* Refer to the accompanying PDF for help if needed.

* One partner should create a new repository on GitHub. Name it anything you like. Don't forget to click "initialize this repository with a README".

* Add the other partner as a collaborator, by going to `Settings > Collaborators` and adding their GitHub username.

* Under the `Branches` tab in settings, choose master from the drop down under `Branch protection rules` 

* Check all of the following: 

  * Protect this branch
  * Require pull request reviews before merging
  * Include administrators

* Clone the repository to your local machine using `git clone`.

* Create and checkout a new branch using `git checkout -b` followed by a branch name. Remember that branch names should describe the feature that will be created on that branch.

* Open the project in your editor and make some changes.

* Add and commit the changes using:

```
git add -A 
```
```
git commit -m "descriptive message here"
```

* Push these changes back up to GitHub using `git push origin` followed by your branch name.

* Navigate to your repository in GitHub and there will be a prompt to open a pull request (you may need to refresh).

* Click the green button to "create a pull request"

* Assign a collaborator to review your pull request and merge it.

* On your local machine, checkout the master branch using `git checkout master` and then update the branch to show the latest changes using `git pull origin master`
