import SignupPage from "../Locators/SignupPage";

const signupPage = new SignupPage()

Cypress.Commands.add('validateSignupPageIsOpen', () => {
    cy.get(signupPage.signupPageTitle).should('be.visible')
});