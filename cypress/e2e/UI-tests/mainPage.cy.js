/// <reference types="cypress" />
import "cypress-real-events/support"
import MainPage from "../../pageObjects/MainPage"

const mainPage = new MainPage();


// ================ testing block - 8-day forecast ================

describe('8-day forecast on index', () => {

    beforeEach(function () {
        cy.visit('/');
        cy.fixture('weatherData').then((data) => {
            this.data = data;
        });
    });

    it('Test header', function () {

        mainPage.elements.eightDayForecastTitle().should('have.text', this.data.headerForecastEightDay).and('be.visible')
        mainPage.elements.XPath_eightDayForecastTitle().should('have.text', this.data.headerForecastEightDay).and('be.visible')
    });

    it('Test for the count of days', function () {

        mainPage.elements.eightDayForecastCount().should('have.length', this.data.countForecastEightDays)
        mainPage.elements.XPath_eightDayForecastCount().should('have.length', this.data.countForecastEightDays)
    });

    it('Test for correct dates', function () {

        let currentDate = new Date();
        let eightDates = currentDate.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: '2-digit'});
        for (let i = 0; i < 7; i++) {
            currentDate.setDate(currentDate.getDate() + 1);
            eightDates += currentDate.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: '2-digit'})
        };

        mainPage.elements.eightDayForecastDate().should('have.text', eightDates)
        mainPage.elements.XPath_eightDayForecastDate().should('have.text', eightDates)
    });

    it('Test for the count of weather icon', function () {

        mainPage.elements.eightDayForecastIcon().should('have.length', this.data.iconWeatherForecastEightDays)
        mainPage.elements.XPath_eightDayForecastIcon().should('have.length', this.data.iconWeatherForecastEightDays)
    });

    it('Test show full forecast and return back', function () {

        mainPage.clickEightDayForecastList()
        mainPage.elements.eightDayForecastList().should('not.be.visible')
        mainPage.clickEightDayForecastFull()
        mainPage.elements.eightDayForecastList().should('be.visible')

        mainPage.XPath_clickEightDayForecastList()
        mainPage.elements.XPath_eightDayForecastList().should('not.be.visible')
        mainPage.XPath_clickEightDayForecastFull()
        mainPage.elements.XPath_eightDayForecastList().should('be.visible')
    });
});


// ================ testing block - Search ================

describe('Search on index', () => {

    beforeEach(function () {
        cy.visit('/');
        cy.fixture('weatherData').then((data) => {
            this.data = data;
        });
    });

    it('Positive testing of the City Search', function () {

        let searchCity = 'Paris'

        mainPage.elements.searchCityField()
                         .should('have.attr', 'placeholder', this.data.searchCityPlaceholder)
                         .type(searchCity)
        mainPage.elements.searchCityButton()
                         .should('have.text', this.data.searchCityButtonName)

        mainPage.clickSearchCityButton()
        mainPage.elements.searchCityDropdown()
                         .should('be.visible').contains(searchCity)

        mainPage.clickSearchCityDropdownFirstRow()
        mainPage.elements.currentCityName()
                         .should("contain", searchCity)
    });

    it('Negative testing of the City Search', function () {

        let searchCityText = 'Gfjfdingodo'

        mainPage.elements.searchCityField().type(searchCityText)
        mainPage.clickSearchCityButton()

        mainPage.elements.searchCityNotFound()
                         .should('be.visible')
                         .and('have.text', this.data.searchCityError)
        mainPage.elements.searchCityNotification()
                         .should('be.visible')
                         .and('have.text', this.data.searchCityNoResults + searchCityText)
    });


});