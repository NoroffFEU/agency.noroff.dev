// Author: Åke Ek

describe('Create function', () => {
  it.skip('should create a new item', () => {
    cy.visit('/pages/listings/create/index.html');
    cy.wait(1000);
    cy.get('input[name="title"]').type('New Item');
    cy.get('input[name="location"]').type('Trondheim');
    cy.get('input[name="deadline"]').type('2023-03-01T12:00');
    cy.get('#pictureUrl').type(
      'https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa627f1cf-3ac3-440d-860d-92b924f8fd74_1024x640.png'
    );
    cy.get('#createDescription').type('I want this job beacuse I am good at it.');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'create');
  });
});

//    Remaining:
// -    Missing a function that actives the submit-btn.
//      Then the last "CY.url" needs to be updated
