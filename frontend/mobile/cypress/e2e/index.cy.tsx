/// <reference types="cypress" />

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081/');
  });

  it('Verify Text', () => {
    cy.get("div[id='root']").should('contain.text', 'Tab One');
  });
});
