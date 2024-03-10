describe('App', () => {
  it('should work', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Welcome to My Pantry App');
  });
});
