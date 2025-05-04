import HomeLocators from "../../support/Locators/HomeLocators"
const homeLocators = new HomeLocators()

Cypress.Commands.add('validateHomePageIsVisible', () => {
    cy.get(homeLocators.homePageCarousel).should('be.visible')
});

Cypress.Commands.add('goToLoginPage', () => {
    cy.get(homeLocators.headerBtns).contains('Login').click()
    cy.validateSignupTitle()
});