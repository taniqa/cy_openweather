//import Header from "./Header";
//class MainPage extends Header {

class MainPage {
    elements = {
    //CSS selectors
        eightDayForecastTitle: () => cy.get('div.daily-container h3'),
        eightDayForecastCount: () => cy.get('ul.day-list li'),
        eightDayForecastDate: () => cy.get('ul.day-list li span:nth-child(1)'),
        eightDayForecastIcon: () => cy.get('ul svg.owm-weather-icon'),
        eightDayForecastList: () => cy.get('ul.day-list li:nth-child(1)'),
        eightDayForecastFull: () => cy.get('ul.options-scroller li:nth-child(1)'),

        searchCityField: () => cy.get('div.search-container input'),
        searchCityButton: () => cy.get('div.search-container + button'),
        searchCityDropdown: () => cy.get('div.search-container ul.search-dropdown-menu'),
        searchCityDropdownFirstRow: () => cy.get('ul.search-dropdown-menu li:first-child'),
        searchCityNotFound: () => cy.get('div .sub.not-found.notFoundOpen'),
        searchCityNotification: () => cy.get('div.widget-notification'),

        currentCityName: () => cy.get('div.current-container h2'),
        currentTemp: () => cy.get('div.current-temp span.heading'),
        currentDate: () => cy.get('div.current-container.mobile-padding span.orange-text'),

    //XPath selectors
        XPath_eightDayForecastTitle: () => cy.xpath("//div[@class='daily-container block mobile-padding']/h3"),
        XPath_eightDayForecastCount: () => cy.xpath("//ul[@class='day-list']/li/span"),
        XPath_eightDayForecastDate: () => cy.xpath("//ul[@class='day-list']/li/span"),
        XPath_eightDayForecastIcon: () => cy.xpath("//ul//*[@class='owm-weather-icon']"),
        XPath_eightDayForecastList: () => cy.xpath("//ul[@class='day-list']/li[1]"),
        XPath_eightDayForecastFull: () => cy.xpath("//ul[@class='options-scroller']/li[1]")
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

    clickSearchCityButton() {
        this.elements.searchCityButton().click()
    }
    clickSearchCityDropdownFirstRow() {
        this.elements.searchCityDropdownFirstRow().click()
    }

}

export default MainPage;