describe('Edits profile details', () => {
  it('should check that profile details are successfully edited', () => {
    // Intercept the PUT request and login API call
    cy.intercept('PUT', 'https://cors.noroff.dev/https://agency-api.noroff.dev/users/*').as(
      'editProfile'
    );
    cy.intercept('POST', 'https://cors.noroff.dev/https://agency-api.noroff.dev/users/login').as(
      'loginAPI'
    );

    cy.visit('/'); // Please replace this with your local vite url

    // Login process
    cy.get('#email').type('cypress-test@noroff.no');
    cy.get('#password').type('czv4euj*ncv6NUG@aqy');
    cy.get('button[type="submit"]').click();

    // Navigate to profile edit modal
    cy.contains('Profile').click();
    cy.contains('EDIT PROFILE').click();

    // Fill out the edit profile form
    cy.get('#firstNameStudent').should('be.visible');
    cy.get('#firstNameStudent').clear();
    cy.get('#firstNameStudent').type('This', { delay: 100 });
    cy.get('#lastNameStudent').clear();
    cy.get('#lastNameStudent').type('User', { delay: 100 });
    cy.get('#studentSkills').clear();
    cy.get('#studentSkills').type('E2E-testing, Cypress, JavaScript');
    cy.get('#studentDescription').clear();
    cy.get('#studentDescription').type(
      `Hello! This "About Me" section is written with a Cypress E2E test`
    );

    // Submit the form
    cy.get('.d-grid > .fw-semibold').click();

    // Verify updated profile details
    cy.visit('http://127.0.0.1:4173/pages/user/'); // Please replace the first part with your local vite url
    cy.get('#profileName').should('contain', 'This User');
    cy.get('#skillsList > :nth-child(1)').should('contain', 'E2E-testing');
    cy.get('#skillsList > :nth-child(2)').should('contain', 'Cypress');
    cy.get('#skillsList > :nth-child(3)').should('contain', 'JavaScript');
    cy.get('#descriptionBody').should(
      'contain',
      `Hello! This "About Me" section is written with a Cypress E2E test`
    );
  });
});
