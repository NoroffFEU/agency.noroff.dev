const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Login page', () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit('/pages/auth/login/');
    cy.url().should('include', 'auth/login');
  });

  it('should display an error when attempting to login with the wrong credentials', () => {
    cy.login('wrongEmail@noroff.no', 'wrongPassword');
    cy.contains('Invalid login credentials. Please try again').should('be.visible');
  });

  it('should only display the profile link when logged in', () => {
    cy.findByTestId('header').contains('Profile').should('not.exist');
    cy.findByTestId('header').contains('Log out').should('not.exist');

    cy.login(username, password);

    cy.findByTestId('header').contains('Profile').should('be.visible');
    cy.findByTestId('header').contains('Log out').should('be.visible');

    cy.findByTestId('header').contains('Log out').click();
    cy.findByTestId('header').contains('Profile').should('not.exist');
    cy.findByTestId('header').contains('Log out').should('not.exist');
  });

  it('should login successfully with the correct credentials', () => {
    cy.login(username, password);

    cy.contains('Welcome to Noroff Job Agency').should('be.visible');
    cy.findByTestId('header').contains('Profile').should('be.visible');
    cy.findByTestId('header').contains('Log out').should('be.visible');
    cy.findByTestId('header').contains('Profile').click();

    cy.get('#profileName').should('contain', 'cypress test');
    // Mariusz Rozycki as QA-phoenix
    // To get 'cy.get('#profileRole').should('contain', 'Applicant'); works I change code inside file applicantProfile.js'
    // eventually it could be such assertion used instead to don't render profileRole on 'edit web': 'cy.checkLocalStorage('role', 'Applicant')';
    cy.get('#profileRole').should('contain', 'Applicant');
  });

  it('should logout successfully', () => {
    cy.login(username, password);

    cy.findByTestId('header').contains('Profile').click();

    cy.get('#profileName').should('contain', 'cypress test');
    // Mariusz Rozycki as QA-phoenix
    // To get 'cy.get('#profileRole').should('contain', 'Applicant'); works I change code inside file applicantProfile.js'
    // eventually it could be such assertion used instead to don't render profileRole on 'edit web': 'cy.checkLocalStorage('role', 'Applicant')';
    cy.get('#profileRole').should('contain', 'Applicant');

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

  // this test is explicitly using the login form, not the login command, to test the remember me functionality
  it('should save credentials to local storage when remember is checked', () => {
    cy.findByTestId('login-form-email').type(username);
    cy.findByTestId('login-form-password').type(password);
    cy.get('input[type="checkbox"]').check();
    cy.get('button[type="submit"]').click();

    cy.findByTestId('header').contains('Profile').click();

    cy.contains('cypress test');
    cy.contains('Applicant');

    cy.checkLocalStorage('email', username);
    cy.checkLocalStorage('id', '649e0993-ce87-474e-8714-9e44d2de8e40');
    cy.checkLocalStorage('role', 'Applicant');
    cy.checkLocalStorage('token', 'NOT_NULL');

    cy.checkSessionStorage('email', null);
    cy.checkSessionStorage('id', null);
    cy.checkSessionStorage('role', null);
    cy.checkSessionStorage('token', null);
  });

  // this is skipped until https://github.com/NoroffFEU/agency.noroff.dev/issues/1022 is resolved
  it.skip('should save credentials to session storage when remember is not checked', () => {
    cy.findByTestId('login-form-email').type(username);
    cy.findByTestId('login-form-password').type(password);
    cy.get('input[type="checkbox"]').uncheck();
    cy.get('button[type="submit"]').click();

    cy.findByTestId('header').contains('Profile').click();

    cy.get('#skillsHeader').should('contain', 'Skills');

    cy.checkLocalStorage('email', null);
    cy.checkLocalStorage('id', null);
    cy.checkLocalStorage('role', null);
    cy.checkLocalStorage('token', null);

    cy.checkSessionStorage('email', username);
    cy.checkSessionStorage('id', '649e0993-ce87-474e-8714-9e44d2de8e40');
    cy.checkSessionStorage('role', 'Applicant');
    cy.checkSessionStorage('token', 'NOT_NULL');
  });
});
