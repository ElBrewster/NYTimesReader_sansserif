/// <reference types="cypress" />

describe("User Flow: As a user, I should be able to click a section title in the top navigation of the home page, and the site should then navigate to that page displaying that category of articles", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}", {fixture: "../fixtures/arts-articles.json"})
    cy.visit('http://localhost:5173/arts'); 
  });

  it("Should navigate to the 'arts' section of the paper", () => {
    cy.get('[href="/arts"]').contains("ARTS").click().url().should("eq", "http://localhost:5173/arts")
    cy.intercept("GET", "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}", {fixture: "../fixtures/arts-articles.json"})
  });

  it("should show an article with a title", () => {
    cy.get(':nth-child(1) > ._article_1fita_1 > a > ._title_1fita_10').should("be.visible");
    cy.get("h2").contains("Born Into Fame, This Actress Could Soon Have More of Her Own");
  });

  it("Should show an error message where the content usually displays to indicate user has input an invalid link (presumably instead of clicking on a section a-tag)", () => {
    cy.visit("http://localhost:5173/artsy-something-else")
    cy.get("div._noMatchContainer_agddi_1 > p").contains("There's nothing here!")
    cy.get("div._noMatchContainer_agddi_1 > a").click().url().should("eq", "http://localhost:5173/")
  });
})