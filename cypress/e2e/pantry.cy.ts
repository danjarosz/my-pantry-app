/// <reference types="cypress" />

describe("Pantry Page", () => {
  it("should ope login page", () => {
    cy.visit("/pantries/xyz");
  });
});
