/// <reference types="cypress" />
import "cypress-real-events/support" //подключение библиотеки

describe ('Daily forecast on index', ()=> {

    beforeEach (function () {
        cy.visit ('https://openweathermap.org/');
        cy.fixture('weatherData').then ((data) => {
            this.data = data;                        });
    })

    it ('Test header', function (){
        cy.get('div .daily-container h3').should('have.text', this.data.headerForecastDay)
        cy.xpath("//div[@class='daily-container block mobile-padding']/h3").should('have.text', this.data.headerForecastDay)
    });

    it ('Test for the number of days', function (){
        cy.get('ul.day-list li').should('have.length', this.data.numberDays)
        cy.xpath("//ul[@class='day-list']/li/span").should('have.length', this.data.numberDays)
    });

    it ('Test for correct dates', function (){

        let now = new Date();
        let now1 = now.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: '2-digit'});
        for (let i = 0; i < 7; i++) {
            now.setDate(now.getDate() + 1);
            now1 += now.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: '2-digit'})
        };

        cy.xpath("//ul[@class='day-list']/li/span").should('have.text', now1)
        cy.get('ul.day-list li span:nth-child(1)').should('have.text', now1)
    });

    it ('Test for the number of weather icon', function (){
        cy.get('ul svg.owm-weather-icon').should('have.length', this.data.iconWeather)
        cy.xpath("//ul//*[@class='owm-weather-icon']").should('have.length', this.data.iconWeather)
    });

    it ('Test show full forecast and return back', function (){
        cy.get('ul.day-list li:nth-child(1)').click()
        cy.get('ul.options-scroller li:nth-child(1)').click()

        cy.xpath("//ul[@class='day-list']/li[1]").click()
        cy.xpath("//ul[@class='options-scroller']/li[1]").click()
    });
});

describe ('Daily forecast on index', ()=> {

    beforeEach (function () {
        cy.visit ('https://openweathermap.org/');
        //cy.viewport(1680, 1050); - так можно менять размер окна браузера
        cy.fixture('weatherData').then ((data) => {
            this.data = data;                        });
    })

    it ('Test header', function (){
        cy.get('div .daily-container h3').should('have.text', this.data.headerForecastDay)
        cy.xpath("//div[@class='daily-container block mobile-padding']/h3").should('have.text', this.data.headerForecastDay)
    });
});