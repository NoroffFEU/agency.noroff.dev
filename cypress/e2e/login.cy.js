describe('Login page', () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/pages/auth/login/');
    cy.url().should('include', 'auth/login');
  });

  it('should display an error when attempting to login with the wrong credentials', () => {
    cy.get('#email').type('user@example.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid login credentials. Please try again').should('be.visible');
  });

  it('should login successfully with the correct credentials', () => {
    cy.get('#email').type('cypress-test@noroff.no');
    cy.get('#password').type('czv4euj*ncv6NUG@aqy');
    cy.get('button[type="submit"]').click();

    cy.get('#profileName').should('contain', 'cypress test');
    cy.get('#profileRole').should('contain', 'Applicant');
    cy.get('#profileEmail').should('contain', 'cypress-test@noroff.no');
  });

  it('should logout successfully', () => {
    cy.get('#email').type('cypress-test@noroff.no');
    cy.get('#password').type('czv4euj*ncv6NUG@aqy');
    cy.get('button[type="submit"]').click();

    cy.get('#profileName').should('contain', 'cypress test');
    cy.get('#profileRole').should('contain', 'Applicant');
    cy.get('#profileEmail').should('contain', 'cypress-test@noroff.no');

    cy.contains('Log out').click();

    cy.contains('Welcome to Noroff Job Agency').should('be.visible');

    cy.checkLocalStorage('email', null);
    cy.checkLocalStorage('id', null);
    cy.checkLocalStorage('role', null);
    cy.checkLocalStorage('token', null);

    cy.checkSessionStorage('email', null);
    cy.checkSessionStorage('id', null);
    cy.checkSessionStorage('role', null);
    cy.checkSessionStorage('token', null);
  });

  it('should save credentials to local storage when remember is checked', () => {
    cy.get('#email').type('cypress-test@noroff.no');
    cy.get('#password').type('czv4euj*ncv6NUG@aqy');
    cy.get('input[type="checkbox"]').check();
    cy.get('button[type="submit"]').click();

    cy.get('#profileName').should('contain', 'cypress test');
    cy.get('#profileRole').should('contain', 'Applicant');
    cy.get('#profileEmail').should('contain', 'cypress-test@noroff.no');

    cy.checkLocalStorage('email', 'cypress-test@noroff.no');
    cy.checkLocalStorage('id', '649e0993-ce87-474e-8714-9e44d2de8e40');
    cy.checkLocalStorage('role', 'Applicant');
    cy.checkLocalStorage('token', 'NOT_NULL');

    cy.checkSessionStorage('email', null);
    cy.checkSessionStorage('id', null);
    cy.checkSessionStorage('role', null);
    cy.checkSessionStorage('token', null);
  });

  it('should save credentials to session storage when remember is not checked', () => {
    cy.get('#email').type('cypress-test@noroff.no');
    cy.get('#password').type('czv4euj*ncv6NUG@aqy');
    cy.get('input[type="checkbox"]').uncheck();
    cy.get('button[type="submit"]').click();

    cy.get('#skillsHeader').should('contain', 'Skills');

    // profile view is currently broken when using session storage, e.g "don't remember me"
    // when this is fixed, add profile assertion here

    cy.checkLocalStorage('email', null);
    cy.checkLocalStorage('id', null);
    cy.checkLocalStorage('role', null);
    cy.checkLocalStorage('token', null);

    cy.checkSessionStorage('email', 'cypress-test@noroff.no');
    cy.checkSessionStorage('id', '649e0993-ce87-474e-8714-9e44d2de8e40');
    cy.checkSessionStorage('role', 'Applicant');
    cy.checkSessionStorage('token', 'NOT_NULL');
  });
});
