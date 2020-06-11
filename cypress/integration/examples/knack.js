describe('Verify knack logo links to correct page', () => {
    it('Go to home page', () => {
      cy.visit('https://www.knack.com/')
      cy.get('#logo > a').should('have.attr', 'href', '/')
    })
  })