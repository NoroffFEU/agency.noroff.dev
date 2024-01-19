describe('Edits profile details', () => {
  it('should check that profile details are successfully edited', () => {
    cy.intercept('PUT', 'https://cors.noroff.dev/https://agency-api.noroff.dev/users/*').as(
      'editProfile'
    );

    cy.intercept('POST', 'https://cors.noroff.dev/https://agency-api.noroff.dev/users/login').as(
      'loginAPI'
    );

    cy.visit('http://127.0.0.1:5173/'); // Please replace this with your local vite url

    cy.contains('Log in').click();
    cy.get('#email').type('thisuser@stud.noroff.no', { force: true });
    cy.get('#password').type('qwe123***', { force: true });
    cy.get('button[data-auth="login"]').click({ force: true });

    cy.contains('Profile').click();
    cy.contains('EDIT PROFILE').click();

    cy.wait(200);
    cy.get('#firstNameStudent').clear().type('This', { delay: 100 });
    cy.get('#lastNameStudent').clear().type('User', { delay: 100 });
    cy.get('#studentSkills').clear().type('E2E-testing, Cypress, JavaScript');
    cy.get('#studentDescription')
      .clear()
      .type(`Hello! This "About Me" section is written with a Cypress E2E test`);
    cy.get('.d-grid > .fw-semibold').click();

    cy.wait('@editProfile').its('response.statusCode').should('eq', 200);

    cy.visit('http://127.0.0.1:5173/pages/user/'); // Please replace the first part with your local vite url
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
