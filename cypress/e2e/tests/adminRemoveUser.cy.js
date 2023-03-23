describe('on admin page, the user should be able to remove users from the "users" tab', () => {
  it('should remove user when delete button is clicked', () => {
    cy.visit('/pages/admin/');

    cy.intercept('DELETE', '/users/*', {
      statusCode: 200,
      body: {
        success: true,
        message: 'user removed',
      },
    }).as('deleteUser');

    cy.get('[data-show-user-remove]').first().click();

    cy.wait('@deleteUser').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });
});
