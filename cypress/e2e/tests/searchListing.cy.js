describe('Test search listing input', () => {
  it('can search for listing by title', () => {
    cy.visit('/pages/listings/index.html');
    cy.wait(1000);
    cy.get('input#searchListing').type('Orange', { delay: 500 });
    cy.wait(500);
    cy.get('h5.card-title').first().contains('Orange');
  });
});
