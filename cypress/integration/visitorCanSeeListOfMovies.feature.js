describe("Visitor can see a list of movies", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:visitor_can_see_list_of_movies.json"
    })
    cy.visit("http://localhost:3000/")
  })

  it ("successfully display a list of articles", () => {
    cy.get("[data-cy='movie-index']").within(() => {
      cy.get("[data-cy='movie-list']")
        .should("contain", "Grey's Anatomy")
        .and('contain', "Criminal Minds")
        .and('contain', "Hawaii Five-0")
    })
  })
})