/// <reference types="cypress" />
import "cypress-real-events/support"

import Header from "../../pageObjects/Header"
import SignIn from "../../pageObjects/SignIn"

const header = new Header();
const signIn = new SignIn();

describe('Sign In form testing', () => {

    beforeEach(function () {
        cy.visit('/');
        cy.fixture('weatherData').then((data) => {
            this.data = data;
        });
    });

    it('Positive testing Sign In user', function () {

        header.clickNavLinkSignIn()

        signIn
            .typeSignInInputEmail(this.data.userEmail)
            .typeSignInInputPassword(this.data.userPassword)
            .checkSignInCheckboxRememberMe()
            .clickSignInButtonSubmit()

        signIn.elements.signInNotice().should('be.visible')
                                      .and('have.text', this.data.userSignedNotice)
    });



})
