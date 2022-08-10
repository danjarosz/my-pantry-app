/// <reference types="cypress" />

describe("Not Found Page", () => {
  it("should ope login page", () => {
    cy.visit("/not-found");
  });
});
