// Anna Wojtowicz (Tryvann)


describe('Create Listing', () => {
   
    beforeEach(() => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.visit('/pages/auth/login/');
        cy.url().should('include', 'auth/login');
        

    // the code below is from the login.cy.js file
        cy.get('#email').type('cypress-test@noroff.no');
        cy.get('#password').type('czv4euj*ncv6NUG@aqy');
        cy.get('button[type="submit"]').click();
      });


    it('should check that the user can create a listing', () => {
        // Intercept the login API call - the API call is not implemented yet
        // cy.intercept('POST', 'https://').as(
        //     'createListingAPI'
        // );
    
       
    // Visit the create listing page
         cy.visit('http://127.0.0.1:5173/pages/listings/listing/create/index.html');
      

    // Fill in the create listing form and submit
        // cy.get('#companySelect').select('Cypress Test Company');
        cy.get('#createTitle').type('Cypress Test Listing');
        cy.get('#createTags').type('tag1, tag2, tag3');
        cy.get('#createRequirements').type('requirement1, requirement2, requirement3');
        cy.get('#createDeadline').type('2024-06-01T08:30');
        cy.get('#createDescription').type('This is a test listing created by Cypress');
        cy.get('#createListingBtn').click();
        // cy.wait('@createListingAPI').then((interception) => {
        //     assert.isNotNull(interception.response.body.data);
        //     assert.equal(interception.response.statusCode, 201);
        // });       
    });
});