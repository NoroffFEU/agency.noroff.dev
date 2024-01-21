# Unit Testing Guide

## Table of Contents

- [Unit Testing Guide](#unit-testing-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Testing Framework](#testing-framework)
  - [Writing Unit Tests](#writing-unit-tests)
    - [Structure](#structure)
    - [Mocking](#mocking)
    - [Assertions](#assertions)
  - [Writing Testable Code](#writing-testable-code)
    - [1. **Modularize Your Code**:](#1-modularize-your-code)
    - [2. **Pure Functions**:](#2-pure-functions)
    - [3. **Dependency Injection**:](#3-dependency-injection)
    - [3. **Avoid Global State**:](#3-avoid-global-state)
    - [4. **Asynchronous Code**:](#4-asynchronous-code)
    - [5. **Error Handling**:](#5-error-handling)
  - [Best Practices](#best-practices)
  - [Resources](#resources)

## Introduction

This guide aims to establish standards for unit testing. Testing is crucial in software development, particularly for projects like ours with so many active contributors. It serves as a safety net, ensuring that new changes don't inadvertently break existing functionality. With thorough testing, we can refactor code and add new features with confidence, maintaining the integrity and reliability of the application. Think of tests as the first line of defense against bugs and as a tool for preserving code quality amidst ongoing development and collaboration.

## Testing Framework

We are using `Jest` along with `jest-fetch-mock` for mocking network requests and `@testing-library` for easier DOM testing.

## Writing Unit Tests

### Structure

Each test file should correspond to a specific module or component. Use `describe` blocks to group related tests and `it` or `test` for individual test cases.

Example:

```javascript
describe('moduleName', () => {
  it('should do something', () => {
    // Test code
  });
});
```

### Mocking

Use `jest-fetch-mock` to mock network requests. This allows us to simulate different server responses.

Example:

```javascript
beforeEach(() => {
  fetch.resetMocks();
});

it('sends a correct request', async () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      /* response data */
    })
  );

  // Test code that makes a fetch request
});
```

### Assertions

Make your assertions as specific as possible. Always check for the expected outcome of the operation.

Example:

```javascript
expect(result).toEqual(expectedResult);
```

## Writing Testable Code

### 1. **Modularize Your Code**:

Break down your code into smaller, independent modules. Each module should have a single responsibility. This makes it easier to test individual parts of the application.

❌ This code is hard to test, as it has multiple responsibilities

```js
function processAndSaveUser(data) {
  if (!data.name || !data.email) {
    throw new Error('Invalid user data');
  }

  const processedData = {
    ...data,
    processedAt: new Date().toISOString(),
  };

  saveToDatabase(processedData);
}
```

✅ In this refactored version, we have separate functions with single responsibilities

```js
function validateUser(data) {
  if (!data.name || !data.email) {
    throw new Error('Invalid user data');
  }
}

function processUser(data) {
  const processedData = {
    ...data,
    processedAt: new Date().toISOString(),
  };

  return processedData;
}

function processAndSaveUser(data) {
  validateUser(data);
  const processedData = processUser(data);
  saveToDatabase(processedData);
}
```

### 2. **Pure Functions**:

Whenever possible, use pure functions. These functions should depend only on their input arguments and produce no side effects. This predictability makes them straightforward to test.

❌ This function is impure as it depends on an external variable

```js
let counter = 0;

function increment() {
  counter++;
}
```

✅ This function is pure as it depends only on its input arguments

```js
function increment(counter) {
  return counter + 1;
}
```

### 3. **Dependency Injection**:

Pass dependencies to functions or modules. This makes it easier to swap out real dependencies with mock ones during testing.

❌ This function is hard to test as it depends on an external dependency

```js
function getUser() {
  return fetch('https://example.com/api/user');
}
```

✅ This function is easier to test as it accepts the dependency as an argument

```js
function getUser(fetch) {
  return fetch('https://example.com/api/user');
}
```

### 3. **Avoid Global State**:

Global state can lead to unpredictable behavior in tests. Aim for functions and modules that don't rely on or alter external/global variables.

❌ This function is hard to test as it depends on a global variable

```js
let loggedInUser = null;

function setUser(user) {
  loggedInUser = user;
}
```

✅ This function is easier to test as it returns the new state instead of altering a global variable

```js
function login(currentUser, newUser) {
  // Return a new state object, without modifying the global state
  return {
    ...currentUser,
    ...newUser,
  };
}
```

### 4. **Asynchronous Code**:

For asynchronous operations, return Promises or use async/await. This makes it easier to test these operations as you can wait for the Promise to resolve.

❌ This function is hard to test as it doesn't return a Promise

```js
function getUser(id, callback) {
  fetch(`/user/${id}`).then((response) => callback(response.json()));
}
```

✅ This function is easier to test as it returns a Promise

```js
async function getUser(id) {
  const response = await fetch(`/user/${id}`);
  return response.json();
}
```

### 5. **Error Handling**:

Write error handling logic carefully. Ensure that errors are predictable and testable.

❌ This function is hard to test as it doesn't handle errors, it just logs them

```js
function processData(data) {
  try {
    // Complex data processing logic
  } catch (error) {
    console.error('An error occurred', error);
  }
}
```

✅ This function is easier to test as it throws a more specific error

```js
function processData(data) {
  if (!data) {
    throw new TypeError('processData expects data to be non-null');
  }

  try {
    // Complex data processing logic
  } catch (error) {
    if (error instanceof TypeError) {
      throw new TypeError('processData expects data to be an object');
    }

    throw error;
  }
}
```

## Best Practices

- **Test Co-location**: Keep your tests co-located with the code they are testing. The test file should be in the same directory as the code file and have the same name but end with `.test.js`. This makes it easier to maintain and understand the relationship between your code and tests.

- **Run Tests Locally**: Before pushing your code, always run tests locally to catch issues early. Use the command `npm run test-unit` to execute all tests.

- **Interactive Testing with Watch Mode**: Use Jest's watch mode to run the test every time you save the file.

  Run `npm run test-unit -- --watch` to start the test runner in watch mode. You can specify a test file to watch, like

  `npm run test-unit -- --watch src/js/api/auth/login.test.js`

  This is particularly useful when actively developing and refining a specific test.

- **Review Tests in PRs**: Ensure that every pull request includes relevant tests. Tests should be reviewed with the same rigor as the code itself.

- **Code Coverage**: Strive for high code coverage but don't sacrifice test quality for numbers. This doesn't guarantee perfect code, but it's a good indicator of well-tested functionalities.

- **Document Test Cases**: For complex scenarios, add comments explaining the rationale behind the test cases. This helps others understand the test's intent.

- **Use Jest VS Code Extension**: To improve your testing workflow, use the Jest extension in Visual Studio Code. It provides inline test results and debugging tools, making it easier to write and debug tests.

- **Continuous Integration (CI)**: All unit tests are included in our CI pipeline and will run on every pull request targeting the `main` branch. This ensures that new changes don't break existing functionalities.

Remember, testing is not an afterthought; it's an integral part of the development process. By adhering to these practices, we maintain a robust and reliable codebase.

## Resources

- [Jest Documentation](https://jestjs.io/docs/en/getting-started)
- [Jest VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [Unit Testing Best Practices: 9 to Ensure You Do It Right](https://www.testim.io/blog/unit-testing-best-practices/)
- [The Pyramid of Unit Testing Benefits](https://blog.pragmaticengineer.com/unit-testing-benefits-pyramid/)
- 🎬 [Test-Driven Development // Fun TDD Introduction with JavaScript](https://www.youtube.com/watch?v=Jv2uxzhPFl4)

---

Remember, testing is not just about catching bugs; it's about ensuring your code behaves as expected under various scenarios. Happy testing! 🪲🔍🚀
