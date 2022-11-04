describe("Dummy App Test", () => {
  it("check if text exists", () => {
    cy.visit("/");
    cy.contains("Hello World");
  });
});
