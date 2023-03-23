describe('on admin page, the user should be able to remove users from the "users" tab', () => {
  it('should remove user when delete button is clicked', () => {
    cy.visit('/pages/admin/index.html', {
      onBeforeLoad(win) {
        win.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY3OTU5NzE4MSwiZXhwIjoxNjc5NjAwNzgxfQ.GcLEktmC-dt7jmFdfiKI3wNxtZq2V-jv0GQvhQUoGrU');
      },
    });

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
