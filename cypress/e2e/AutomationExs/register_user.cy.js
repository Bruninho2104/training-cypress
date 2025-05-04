/// <reference types="cypress" />
import { faker } from "@faker-js/faker"

describe('Register User', () => {
    beforeEach('Open web site', () => {
        cy.openWebSite()
        cy.goToLoginPage()
    })
    it('Validate user registration succesfully', () => {
        let email = faker.internet.email()
        cy.fillInSignupForm('Teste', email)

        cy.validateSignupPageIsOpen()
    })
})