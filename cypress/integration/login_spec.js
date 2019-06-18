context("Cypress login-demo", () => {
  it("login-scenario", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".login").click();
  });
});
