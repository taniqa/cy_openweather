// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// -- This my commands for get api response --

Cypress.Commands.add('getResponse', (lat, lon) => {

    cy.request( {
        method: 'GET',
        url: `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5fc0795fcbfb2581f15b5a22efa4489e`})
        .then((response) => {
            cy.writeFile('cypress/fixtures/currentWeatherData.json', response.body)
        })
})



