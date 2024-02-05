describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });

  it("exist", () => {
    cy.visit("/");
    cy.get('[data-testid="box-element"]').should("exist");
  });

  it("renders component content", () => {
    cy.visit("/");
    cy.get('[data-testid="box-element"]')
      .should("exist")
      .and("contain", "כתובת")
      .and("have.descendants", "div");
  });
  it('finds the button "add donation" and moves', () => {
    cy.visit("/");

    cy.contains("add donation").click();
    cy.url().should("include", "/runways");
    cy.get("#firstName").type("fakeName");
    cy.get("#lastName").type("שם משפחה לדוגמא");
    cy.get('button[type="submit"]').click();
  });
});
