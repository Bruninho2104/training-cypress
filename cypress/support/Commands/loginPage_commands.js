import LoginLocators from "../../support/Locators/LoginLocators"
const loginLocators = new LoginLocators()

Cypress.Commands.add('validateSignupTitle', () => {
    cy.get(loginLocators.signupTitle).should('have.text', 'New User Signup!')
});

Cypress.Commands.add('fillInSignupForm', (name, emailAdress) => {
    cy.get(loginLocators.nameField).type(name)
    cy.get(loginLocators.signupEmailField).type(emailAdress)
    cy.get(loginLocators.signupBtn).click()
});