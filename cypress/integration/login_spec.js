context("Cypress login-demo", () => {
  it("login-scenario", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".login").click();
    cy.get("#email").type("test@gmail.com");
    cy.get("#passwd").type("12345");
    cy.get("#SubmitLogin > span").click();
    cy.title().should("include", "My account - My Store");
  });
});
