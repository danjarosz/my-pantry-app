/// <reference types="cypress" />

describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Verify Text', () => {
    cy.get("div[id='root']").should('contain.text', 'Tab One');
  });
});
