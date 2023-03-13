describe('Test login with valid credentials', () => {
  it('can log in with the login form with valid credentials', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#signInUser').click({ force: true });
    cy.wait(500);
    cy.get('#username').type('atuny0');
    cy.get('#password').type('9uQFF1Lh');
    cy.get('button[data-auth="login"]').first().click({ force: true });
    cy.location('pathname').should('eq', '/pages/user/index.html');
  });
});
