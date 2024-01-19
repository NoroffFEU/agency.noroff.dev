describe('Active Links', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to Home', () => {
    cy.findByTestId('header').contains('Home').click();
    cy.contains('Welcome to Noroff Job Agency').should('be.visible');
  });

  it('should navigate to Profile', () => {
    cy.findByTestId('header').contains('Profile').click();
    cy.contains('Skills').should('be.visible');
    cy.contains('About Me').should('be.visible');
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
