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
    cy.contains('Log in').click();
    cy.get('#email').type('cypress-test@noroff.no');
    cy.get('#password').type('czv4euj*ncv6NUG@aqy');
    cy.get('button[type="submit"]').click();

    // Navigate to profile edit modal
    cy.contains('Profile').click();
    cy.contains('EDIT PROFILE').click();

    // Fill out the edit profile form
    cy.wait(200);
    cy.get('#editProfileModal').should('be.visible');
    cy.get('#firstNameStudent').clear();
    cy.get('#firstNameStudent').type('This', { delay: 100 });
    cy.get('#lastNameStudent').clear();
    cy.get('#lastNameStudent').type('User', { delay: 100 });
    cy.get('#studentSkills').clear();
    cy.get('#studentSkills').type('E2E-testing');
    cy.get('#studentDescription').clear();
    cy.get('#studentDescription').type(`First student description edit`);

    // Submit the form
    cy.get('button').contains('SAVE').click();

    // Verify updated profile details
    cy.reload();
    cy.get('#profileName').should('contain', 'This User');
    cy.get('#skillsList').contains('E2E-testing');
    cy.get('#descriptionBody').should('contain', `First student description edit`);

    // Navigate to profile edit modal again
    cy.contains('Profile').click();
    cy.contains('EDIT PROFILE').click();

    // Fill out the edit profile form again to assure changes happen
    cy.wait(200);
    cy.get('#editProfileModal').should('be.visible');
    cy.get('#firstNameStudent').clear();
    cy.get('#firstNameStudent').type('Test', { delay: 100 });
    cy.get('#lastNameStudent').clear();
    cy.get('#lastNameStudent').type('Student', { delay: 100 });
    cy.get('#studentSkills').clear();
    cy.get('#studentSkills').type('Cypress');
    cy.get('#studentDescription').clear();
    cy.get('#studentDescription').type(`New description for student`);

    // Submit the form again
    cy.get('button').contains('SAVE').click();

    // Verify the new, updated profile details
    cy.reload();
    cy.get('#profileName').should('contain', 'Test Student');
    cy.get('#skillsList').contains('Cypress');
    cy.get('#descriptionBody').should('contain', `New description for student`);
  });
});
