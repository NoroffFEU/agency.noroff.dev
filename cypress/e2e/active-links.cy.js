describe('Active Links', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to Home', () => {
    cy.findByTestId('header').contains('Home').click();
    cy.contains('Welcome to Noroff Job Agency').should('be.visible');
  });

  it('should assert that profile does NOT exist in logged out state', () => {
    cy.findByTestId('header').contains('Profile').should('not.exist');
  });

  it('should navigate to Listings', () => {
    cy.findByTestId('header').contains('Listings').click();
    cy.contains('Job Listing').should('be.visible');
  });

  it('should navigate to Login', () => {
    cy.findByTestId('header').contains('Log in').click();
    cy.contains('Sign in').should('be.visible');
  });

  it('should navigate to Register', () => {
    cy.findByTestId('header').contains('Register').click();
    cy.contains('Register for Applicant');
  });
});
