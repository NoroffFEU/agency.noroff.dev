# agency.noroff.dev

Frontend web application for the Noroff Agency API

## Documentation

For more documentation, see: [Link](./documentation/)

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

The project is configured to run with Vite, so you can run the project with the following command. **Do not use live server or any other server, as this will not work.**

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
