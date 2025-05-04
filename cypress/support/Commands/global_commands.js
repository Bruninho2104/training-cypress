Cypress.Commands.add('openWebSite', () => {
    cy.visit(Cypress.config('baseUrl'))
    cy.validateHomePageIsVisible()
})