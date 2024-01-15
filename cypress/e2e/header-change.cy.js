// Cypress test file
describe('Header Changes on Login', () => {
  it('should check that header changes when the user logs in', () => {
    // Intercept the login API call
    cy.intercept('POST', 'https://cors.noroff.dev/https://agency-api.noroff.dev/users/login').as(
      'loginAPI'
    );

    // Visit the login page
    cy.visit('http://127.0.0.1:4173/'); // Please replace this with your local vite url

    cy.contains('Log in').click();

    // Fill in the login form and submit
    cy.get('#email').type('thisuser@stud.noroff.no', { force: true });
    cy.get('#password').type('qwe123***', { force: true });
    cy.get('button[data-auth="login"]').click({ force: true });

    // Checks the localStorage for "role"
    cy.window()
      .its('localStorage')
      .invoke('getItem', 'role')
      .then((role) => {
        return 'role in local storage:', role;
      });

    // Checks if #signOut is visible
    cy.get('#signOut').should('be.visible');
  });
});
