The pipeline includes linting, unit testing, and deployment to GitHub Pages. The workflow file can be found under `.github/workflows/CI.yml`.

## **Workflow Triggers**

The workflow is triggered on:

- Pushes to the `main` branch, excluding changes in `.md`, `.env.example`, and `.gitignore files`.
- Pull requests to the `main` branch, excluding changes in .md, `.env.example`, and `.gitignore files`.
- Manual triggers from the Actions tab.

## **Jobs**

The workflow consists of the following jobs:

- **Setup:** This job runs on an ubuntu-latest environment and performs the following steps:

  1. Checks out the repository.
  2. Caches npm modules.
  3. Installs project dependencies using `npm ci`.

- **Lint:** This job depends on the `setup` job. It lints the code using `npm run lint` and updates the lint status badge.

- **Unit Test:** This job also depends on the `setup` job. It runs unit tests using `npm run test-unit` and updates the unit test status badge.

- Deploy: This job depends on the `setup`, `lint`, and `unit-test` jobs. It only runs if the previous jobs are successful and the event is a push to the `main` branch. The job performs the following steps:

1. Checks out the repository.
2. Installs project dependencies using `npm ci`.
3. Builds the project using `npm run build`.
4. Sets up GitHub Pages for deployment.
5. Uploads the build artifact.
6. Deploys the build to GitHub Pages.
7. Updates the deployment status badge.

## **Concurrency**

The workflow allows one concurrent deployment. If a deployment is in progress, any new deployment will cancel the in-progress deployment.

Workflow Dispatch
The workflow can be manually triggered from the Actions tab.

## Why a CI/CD Pipeline is Needed

In large open source projects like this one, a Continuous Integration/Continuous Deployment (CI/CD) pipeline like the one described in this GitHub Actions workflow is crucial for maintaining high code quality, ensuring code works as expected, and automating the deployment process.
A CI/CD pipeline eases the QA process and helps in early error detection. Automated tests are a crucial part of the pipeline, and they are run every time code is integrated. If a test fails, the pipeline halts, and the error is reported immediately. This means that bugs and issues are caught and fixed early in the development process, before the code makes it to the "production" environment.

### Continuous Integration (CI)

Continuous Integration is a development practice where developers integrate code into a shared repository frequently, preferably several times a day. Each integration can then be verified by an automated build and automated tests.

- **Catch Issues Early:** With CI, you're integrating small pieces of code frequently. This makes it easier to catch and fix issues early before they become bigger problems.

- **Automated Testing:** The CI pipeline automatically runs tests on the integrated code. This ensures that the new code doesn't break existing functionality.

- **Code Quality:** Tools like linters and static analyzers can be run automatically to ensure the code adheres to the project's coding standards.

### Continuous Deployment (CD)

Continuous Deployment is a strategy where code changes are automatically built, tested, and deployed to production.

- **Automated Deployments:** With CD, you can automate the deployment process. This reduces the risk of human error, makes deployments faster, and allows developers to focus on writing code.

- **Consistency:** CD ensures that the main branch is always in a deployable state. This is especially important in open source projects where contributors may be spread across different time zones.

- **Fast Feedback Loop:** With CD, changes are deployed as soon as they're ready. This allows for faster feedback from users and quicker iterations.
