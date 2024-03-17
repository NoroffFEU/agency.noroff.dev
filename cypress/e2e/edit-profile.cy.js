describe('Edits profile details', () => {
  it('should check that profile details are successfully edited', () => {
    cy.visit('/');

    // Login process
    cy.contains('Log in').click();
    cy.get('#email').type('cypress-test@noroff.no');
    cy.get('#password').type('czv4euj*ncv6NUG@aqy');
    cy.get('button[type="submit"]').click();

    // Navigate to profile edit modal
    cy.contains('Profile').click();
    cy.contains('EDIT PROFILE').click();

    // Fill out the edit profile form
    cy.wait(500);
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
    cy.get('button').contains('Save changes').click();

    cy.contains('Profile Updated').should('be.visible');

    // Verify updated profile details
    cy.reload();
    cy.get('#profileName').should('contain', 'This User');
    cy.get('#skillsList').contains('E2E-testing');
    cy.get('#descriptionBody').should('contain', `First student description edit`);

    // Navigate to profile edit modal again
    cy.contains('Profile').click();
    cy.contains('EDIT PROFILE').click();

    // Fill out the edit profile form again to assure changes happen
    cy.wait(500); // wait for modal animation
    cy.get('#editProfileModal').should('be.visible');
    cy.get('#firstNameStudent').clear();
    cy.get('#firstNameStudent').type('cypress', { delay: 100 });
    cy.get('#lastNameStudent').clear();
    cy.get('#lastNameStudent').type('test', { delay: 100 });
    cy.get('#studentSkills').clear();
    cy.get('#studentSkills').type('Cypress');
    cy.get('#studentDescription').clear();
    cy.get('#studentDescription').type(`New description for student`);

    // Submit the form again
    cy.get('button').contains('Save changes').click();
    cy.contains('Profile Updated').should('be.visible');

    // Verify the new, updated profile details
    cy.wait(500);
    cy.reload();
    cy.get('#profileName').should('contain', 'cypress test');
    cy.get('#skillsList').contains('Cypress');
    cy.get('#descriptionBody').should('contain', `New description for student`);
  });
});
