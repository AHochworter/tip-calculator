describe('Main Page Elements', () => {
  it('should load the elements of the main page', () => {
    // Visit the local server where your web application is hosted
    cy.visit('http://localhost:5173/');

    // Header with image 'Splitter' is visible
    cy.get('.header').should('be.visible');

    // Check if the form exists
    cy.get('.form-bill-input').should('exist');
    cy.get('#bill').should('be.visible');
    cy.get('.button-wrapper').should('be.visible');
    cy.get('#num-of-people').should('be.visible');
  });
});
