describe('Active Links', () => {

  beforeEach(()=> {
    cy.visit('/');
  })

  it('should check the links in the header', () => {
    cy.get('#navUl > :nth-child(1) > .nav-link').click();
    cy.url().should('include', '/index.html');

    cy.get('#navUl > :nth-child(2) > .nav-link').click();
    cy.url().should('include', '/pages/user/index.html');

    cy.get('#navUl > :nth-child(3) > .nav-link').click();
    cy.url().should('include', '/pages/listings/index.html');
    cy.contains('Job Listing').should('be.visible');

    cy.get('#navItems').click();
    cy.url().should('include', '/pages/auth/login/index.html');
    cy.contains('Sign in').should('be.visible');

    cy.get('#registerUser').click();
    cy.url().should('include', '/pages/auth/register/index.html');
    cy.contains('Register for Applicant')
  })
});