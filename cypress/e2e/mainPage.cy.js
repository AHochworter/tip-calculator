describe('Main Page Elements', () => {
  it('should load the elements of the main page', () => {
    // Visit the local server where your web application is hosted
    cy.visit('http://localhost:5173/');
    cy.wait(2000); // Adjust the wait time as needed

    // Header with image 'Splitter' is visible
    cy.get('.header').should('be.visible');

    // Check if the form exists
    cy.get('.form-bill-input').should('exist');
    cy.get('#bill').should('be.visible');
    cy.get('.button-wrapper').should('be.visible');
    cy.get('#num-of-people').should('be.visible');

    //Check if tip component elements are loaded
    cy.get('.tip-amount-wrapper > .amount-label').should('be.visible');
    cy.get('.tip-amount-wrapper > .dollar-amount').should('exist');
    cy.get('.total-amount-wrapper > .amount-label').should('be.visible');
    cy.get('.total-amount-wrapper > .dollar-amount').should('exist');
    cy.get('.total-amount-wrapper > .dollar-amount').should('be.visible');

    //Check if inputs work on the page, returning the tip amount per person and total amount per person

    // Refresh the url, just to be sure we're still loading the correct url
    cy.url().should('eq', 'http://localhost:5173/');

    // Click on 15% tip percent
    cy.get('[name="tipPercent"][value="15%"]').click();

    // Type 4 in the number of people
    cy.get('#num-of-people').type('4').should('have.value', '4');

    // Now, type 100 in the bill amount
    cy.get("[name='bill']").type('100').should('have.value', '100');
  });
});
