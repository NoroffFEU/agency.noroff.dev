// Before running this test:
//1. npm run build
//2. npm run build-preview
//3. Replace line 16 with your local vite url
//4. npx cypress run --spec cypress/e2e/header-change.cy.js

// Checks for changes in header when user is logged in/logged out
describe('Header Changes on Login', () => {
  it('should check that header changes when the user logs in/logs out', () => {
    // Intercept the login API call
    cy.intercept('POST', 'https://cors.noroff.dev/https://agency-api.noroff.dev/users/login').as(
      'loginAPI'
    );

    // Visit the login page
    cy.visit('http://127.0.0.1:4173/'); // Please replace this with your local vite url

    cy.get('#registerUser').should('be.visible');
    cy.contains('Log in').click();

    // Fill in the login form and submit
    cy.get('#email').type('thisuser@stud.noroff.no', { force: true });
    cy.get('#password').type('qwe123***', { force: true });
    cy.get('button[data-auth="login"]').click({ force: true });

    // Checks the localStorage for "role", expecting the value not to be equal to null
    cy.window()
    .its('localStorage')
    .invoke('getItem', 'role')
    .should('not.equal', null);

    // Checks if #signOut is visible
    cy.get('#signOut').should('be.visible');

// Clicks the #signOut button
    cy.get('#signOut').click();
    // Checks if the "Log in" and #registerUser is visible
    cy.contains('Log in').should('be.visible');
    cy.get('#registerUser').should('be.visible');
     // Checks the localStorage for "role", expecting the value to be equal to null
    cy.window()
    .its('localStorage')
    .invoke('getItem', 'role')
    .should('equal', null);
  });

});
