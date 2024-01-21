declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to check local storage value.
     * @example cy.checkLocalStorage('key', 'expectedValue')
     */
    checkLocalStorage(key: string, expectedValue: string | null): Chainable<Subject>;

    /**
     * Custom command to check session storage value.
     * @example cy.checkSessionStorage('key', 'expectedValue')
     */
    checkSessionStorage(key: string, expectedValue: string | null): Chainable<Subject>;
  }
}
