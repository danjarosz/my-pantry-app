describe('App', () => {
  it('should work', () => {
    cy.visit('/login');
    cy.get('h1').should('contain', 'Login page');
  });
});
