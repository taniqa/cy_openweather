class SignIn {
    elements = {
        signInInputEmail: () => cy.get('#user_email'),
        signInInputPassword: () => cy.get('#user_password'),
        signInCheckboxRememberMe: () => cy.get('#user_remember_me'),
        signInButtonSubmit: () => cy.xpath('//input[@value="Submit"]'),
        signInNotice: () => cy.get('div.panel-body'),

    }

    typeSignInInputEmail (userEmail) {
        this.elements.signInInputEmail().type(userEmail)
        return this
    };
    typeSignInInputPassword (userPassword) {
        this.elements.signInInputPassword().type(userPassword)
        return this
    };
    clickSignInButtonSubmit () {
        this.elements.signInButtonSubmit().click()
        return this
    };
    checkSignInCheckboxRememberMe () {
        this.elements.signInCheckboxRememberMe().check()
        return this
    }
}

export default SignIn;