/// <reference types="cypress" />

describe("Cadastro", () => {
  it("efetuar cadastro", () => {
    cy.visit("");

    cy.get("button[data-testid=addButton]").click();

    cy.get("input[name=image]").type(
      "https://www.petlove.com.br/dicas/wp-content/uploads/2019/08/shutterstock_531003160.jpg"
    );
    cy.get("input[name=species]").type("Dog");
    cy.get("input[name=subspecies]").type("Siberian Husky");
    cy.get("input[name=sex]").type("Male");
    cy.get("textarea[name=description]").type("A very good dog for frozen areas.");
    cy.get("input[name=price]").type("3000.00");

    cy.get("button[type=submit]").click();

    cy.get('[data-testid="listPage"]').contains("Dog");
  });
});
