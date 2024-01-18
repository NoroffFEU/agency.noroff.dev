describe('Home page', () => {
  it('should load', () => {
    cy.visit('/');
    cy.contains('Welcome to Noroff Job Agency').should('be.visible');
  });
});
