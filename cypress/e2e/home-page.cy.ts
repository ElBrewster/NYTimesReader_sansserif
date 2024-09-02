describe("User Flow: As a user, I should be able to view a list of all the available newspaper sections at the top of the page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}", {fixture: "../fixtures/arts-articles.json"})
    cy.visit('http://localhost:5173/') 
  })
  it("Should show a navigation bar at the top with links to sections", () => {
    cy.visit('http://localhost:5173/')
    cy.get("nav").should("have.class", "newsPaperSections")
    cy.get('[href="/arts"]').contains("ARTS").click().url().should("eq", "http://localhost:5173/arts")

  })
})
