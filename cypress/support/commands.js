import '@testing-library/cypress/add-commands';

Cypress.Commands.add('checkLocalStorage', (key, expectedValue) => {
  cy.window().then((window) => {
    const actualValue = JSON.parse(window.localStorage.getItem(key));
    if (expectedValue === 'NOT_NULL') {
      expect(actualValue).to.not.be.null;
    } else if (expectedValue === null) {
      expect(actualValue).to.be.null;
    } else {
      expect(actualValue).to.equal(expectedValue);
    }
  });
});

Cypress.Commands.add('checkSessionStorage', (key, expectedValue) => {
  cy.window().then((window) => {
    const actualValue = JSON.parse(window.sessionStorage.getItem(key));
    if (expectedValue === 'NOT_NULL') {
      expect(actualValue).to.not.be.null;
    } else if (expectedValue === null) {
      expect(actualValue).to.be.null;
    } else {
      expect(actualValue).to.equal(expectedValue);
    }
  });
});
