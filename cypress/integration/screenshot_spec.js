context("My Test Suit", () => {
  it("take a screen shot", () => {
    cy.visit("https://reactjs.org");
    cy.screenshot();
  });
});
