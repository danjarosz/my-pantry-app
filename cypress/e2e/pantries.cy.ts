/// <reference types="cypress" />

describe("Pantries Page", () => {
  it("should ope login page", () => {
    cy.visit("/pantries");
  });
});
