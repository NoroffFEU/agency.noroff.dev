# agency.noroff.dev

Frontend web application for the Noroff Agency API.
Deployed site: [agency.noroff.dev](https://agency.noroff.dev)

## Documentation Index

Here's a list of additional documentation available for this project:

- [Front-End Brief](./documentation/frontend-brief.md)
- [Purpose of the CA](./documentation/ca-purpose.md)
- [Naming Convention](./documentation/naming-convention.md)
- [How to Branch](./documentation/how-to-branch.md)
- [How to Use the API](./documentation/How-to-use-API.md)
- [E2E Testing Guide](./documentation/E2E-testing-guide.md)
- [GitHub Actions Pipeline](./documentation/GitHub-actions-pipeline.md)
- [Useful Information](./documentation/useful-information.md)

For more details, see the [documentation directory](./documentation/).

## Status

![](https://byob.yarr.is/NoroffFEU/agency.noroff.dev/lint)
![](https://byob.yarr.is/NoroffFEU/agency.noroff.dev/unit-test)
![](https://byob.yarr.is/NoroffFEU/agency.noroff.dev/build)
![](https://byob.yarr.is/NoroffFEU/agency.noroff.dev/deploy)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en) installed on your system.

### Installation

Clone the repo:

```bash
gh repo clone NoroffFEU/agency.noroff.dev
```

Install dependencies:

```bash
npm i
```

### Running the Project

**Do not use live server or any other server, as this will not work.**
The project is configured to run with [Vite](https://vitejs.dev/). Run the project with the following command.

```bash
npm run dev
```

This will start a local server on port 5173. You can access the page by going to [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

To build the project, run the following command:

```bash
npm run build
```

This will create a `dist` folder in the root of the project, which contains the compiled project.

You can preview the build by running the following command:

```bash
npm run build-preview
```

This is useful to see how the project will look when deployed and to test the build. This is recommended before pushing to the repository, as the build will be tested when creating a PR.

### Adding new pages

When adding a new page, you must add the page to the `vite.config.js` file. This is done by adding the new page to the `rollupOptions.input` array. This is to ensure that the page is compiled and added to the build.

## Testing

Jest is used for unit testing. To run the tests, run the following command:

```bash
npm run test-unit
```

The VSCode extension [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) is recommended for running the tests in the editor. The pre-release version is recommended, as it has better support for Jest. You can enable the pre-release version by installing the normal version, going to the extension settings and enabling the `Switch to Pre-Release Version` option.

If you want to run a specific test, you can use the `-t` flag. For example, if you want to run the `test` in the `src/js/utils.test.js` file, you can run the following command:

```bash
npm run test-unit -- -t path/to/file.test.js
```

To run the tests in watch mode, add the `--watch` flag run the following command. This will run the tests in watch mode, which means that the tests will be re-run when a file is changed.

```bash
npm run test-unit -- -t --watch path/to/file.test.js
```

## Contributing

### Step 1: Update the Main Branch

Start by making sure you are working with the most current version of the project:

1. **Switch to Main Branch**: First, switch to the `main` branch (if you're not there already). This ensures you're updating the right branch.

   ```bash
   git checkout main
   ```

2. Pull Latest Changes: Then, pull the latest changes from the main repository. This step updates your local main branch.

   ```bash
   git pull
   ```

### Step 2: Create Your Feature or Fix Branch

After updating the main branch, create a new branch for your work. Name your branch descriptively, such as `feature/new-listing-page` for a new feature or `fix/login-issue` for a bug fix.

```bash
git checkout -b feature/new-listing-page
```

### Step 3: Make Your Changes

Now, it's time to make your changes. Remember to:

- Write clean, well-documented code.
- Follow the coding standards of the project.
- Test your changes thoroughly.

### Step 4: Commit and Push Your Changes

Once you start making changes, it's good practice to commit often and keep commits small. This approach helps in maintaining a clear history of changes, making it easier to track and understand each modification. Small, frequent commits are also easier to manage in terms of resolving potential conflicts and reviewing changes.

- **Commit Often**: After making a meaningful amount of changes or completing a specific task, commit your changes. This could be after fixing a bug, adding a small feature, or even updating documentation.
- **Write Clear Commit Messages**: Each commit message should be clear and descriptive of what the changes entail. This practice is crucial for collaborative work.

After you have made a series of commits, push your branch to the remote repository:

```bash
git add .
git commit -m "Add new listing page"
git push origin feature/new-listing-page
```

Remember, regular commits not only help your team members to understand the changes but also assist you in managing your own workflow more effectively.

### Step 5: Create a Pull Request

When your branch is ready:

Visit the GitHub repository.
Click on 'Pull Requests' and select 'New Pull Request'.
Choose your branch and compare it to the main branch.
Fill out the PR template, detailing your changes.
Submit your pull request.

### Step 6: Resolve Merge Conflicts

If there are any merge conflicts:

1. Update your main branch.
2. Merge these updates into your feature branch and resolve conflicts.
3. Commit and push the resolved changes.

```bash
git checkout main
git pull
git checkout feature/new-listing-page
git merge main
# Resolve merge conflicts in your editor
git commit -m "Resolve merge conflicts"
git push
```

Useful video on [solving merge conflicts in VS Code](https://www.youtube.com/watch?v=HosPml1qkrg)

### Step 7: Await Review

Your PR will be reviewed by a QA team member. If there are any issues, you will be notified and you can make the necessary changes. Once the PR is approved, it will be merged into the main branch.

#### Automated Test Suite with GitHub Actions

When you create a pull request towards the main branch, our GitHub Actions test suite automatically runs several checks on your code. These include linting, unit testing, and building the project. It's crucial for your contributions to pass these checks for the following reasons:

- **Linting**: Ensures your code adheres to the project's coding standards.
- **Unit Testing**: Verifies that your code behaves as expected and doesn't break existing functionality.
- **Build**: Confirms that your changes compile correctly and the project builds successfully.

Keep an eye on these checks once you submit your pull request. If any checks fail, review the details and make necessary adjustments to your code.

## Dependencies

### A front-end framework

Vanilla js stack

### UI framework

Bootstrap [NPM package](https://www.npmjs.com/package/bootstrap)

### Testing framework

jest [NPM package](https://www.npmjs.com/package/jest)
Cypress [NPM package](https://www.npmjs.com/package/cypress)

#### Other dependencies

dotenv [NPM package](https://www.npmjs.com/package/dotenv)
JSdoc [NPM package](https://www.npmjs.com/package/jsdoc)
prettier [NPM package](https://www.npmjs.com/package/prettier)
eslint [NPM package](https://www.npmjs.com/package/eslint)
SASS [NPM package](https://www.npmjs.com/package/sass)
Vite (for dev server work) [NPM package](https://www.npmjs.com/package/vite)
lint-staged [NPM package](https://www.npmjs.com/package/lint-staged)
husky [NPM package](https://www.npmjs.com/package/husky)
