//import Header from "./Header";
//class MainPage extends Header {

    class MainPage{
    elements = {
//CSS selectors
     eightDayForecastTitle: () => cy.get('div.daily-container h3'),
     eightDayForecastCount: () => cy.get('ul.day-list li'),
     eightDayForecastDate: () =>  cy.get('ul.day-list li span:nth-child(1)'),
     eightDayForecastIcon: () =>  cy.get('ul svg.owm-weather-icon'),
     eightDayForecastList: () =>  cy.get('ul.day-list li:nth-child(1)'),
     eightDayForecastFull: () =>  cy.get('ul.options-scroller li:nth-child(1)'),

//XPath selectors
     XPath_eightDayForecastTitle: () => cy.xpath("//div[@class='daily-container block mobile-padding']/h3"),
     XPath_eightDayForecastCount: () => cy.xpath("//ul[@class='day-list']/li/span"),
     XPath_eightDayForecastDate:  () => cy.xpath("//ul[@class='day-list']/li/span"),
     XPath_eightDayForecastIcon:  () => cy.xpath("//ul//*[@class='owm-weather-icon']"),
     XPath_eightDayForecastList:  () => cy.xpath("//ul[@class='day-list']/li[1]"),
     XPath_eightDayForecastFull:  () => cy.xpath("//ul[@class='options-scroller']/li[1]")
}

        clickEightDayForecastList() {
            this.elements.eightDayForecastList().click()
        };
        clickEightDayForecastFull() {
            this.elements.eightDayForecastFull().click()
        };
        XPath_clickEightDayForecastList() {
            this.elements.XPath_eightDayForecastList().click()
        };
        XPath_clickEightDayForecastFull() {
            this.elements.XPath_eightDayForecastFull().click()
        };

}

export default MainPage;