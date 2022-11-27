/// <reference types="cypress" />

import "cypress-real-events/support"
import Header from "../../pageObjects/Header"

const header = new Header();

describe('Testing navigation', () => {
    /* Чек-лист - navigation Проверка меню
    - правильное наименование пунктов меню
    - унификация названий пунктов меню (проверка по стилям)
    - переход по ссылкам
    - открытие/закрытие выпадающего списка в меню
    - переход по ссылкам в выпадающем меню
    - подсветка пункта меню (css оформление) при наведение мышки
     */

    beforeEach(function () {
        cy.visit('/');
        cy.fixture('weatherData').then((data) => {
            this.data = data;
        });
    });

    it('Correct of menu link names', function () {

        header.elements.allNavMenuLink().each((item, index) => {
            expect(item.text()).to.eq(this.data.navMenuLink[index])
        })
    });

    it('Unification of menu link names', function () {

        header.elements.allNavMenuLink().each(($el, idx) => {
            cy.wrap($el).should('have.css', 'color', 'rgb(242, 242, 242)')
                .and('have.css', 'font-family', '"Space Grotesk", Arial, sans-serif')
                .and('have.css', 'font-size', '16px')
        })
    });

    it('Change style menu link after hover mouse', function () {

        header.elements.navLinkGuide().should('have.css', 'color', 'rgb(242, 242, 242)').realHover()
        header.elements.navLinkGuide().should('have.css', 'color', 'rgb(255, 255, 255)')
    });

    it('Go to the page "Guide"', function () {

        header.clickNavLinkGuide()
        header.elements.pageTitle().should('have.text', this.data.pageTitleText[0])
            .and('be.visible')
    });

    it('Go to the page "API"', function () {

        header.clickNavLinkApi()
        header.elements.pageTitle().should('have.text', this.data.pageTitleText[1])
            .and('be.visible')
    });

    it('Go to the page "Dashboard"', function () {

        header.clickNavLinkDashboard()
        header.elements.pageTitle().should('have.text', this.data.pageTitleText[2])
            .and('be.visible')
    });

    it('Go to the page "Marketplace"', function () {

        header.clickNavLinkMarketplace()
        header.elements.pageTitleMarketplace().should('have.text', this.data.pageTitleText[3])
            .and('be.visible')
    });

    it('Go to the page "Pricing"', function () {

        header.clickNavLinkPricing()
        header.elements.pageTitle().should('have.text', this.data.pageTitleText[4])
            .and('be.visible')
    });

    it('Go to the page "Maps"', function () {

        header.clickNavLinkMaps()
        cy.title().should('eq', this.data.pageTitleText[5])
    });

    it('Go to the page "Our Initiatives"', function () {

        header.clickNavLinkInitiatives()
        header.elements.pageTitle().should('have.text', this.data.pageTitleText[6])
            .and('be.visible')
    });

    it('Go to the page "Partners"', function () {

        header.clickNavLinkPartners()
        header.elements.pageTitle().should('have.text', this.data.pageTitleText[7])
            .and('be.visible')
    });

    it('Go to the page "Blog"', function () {

        header.clickNavLinkBlog()
        cy.title().should('eq', this.data.pageTitleText[8])
    });

    it('Go to the page "For Business"', function () {

        header.clickNavLinkBusiness()
        header.elements.pageTitleBusiness().should('have.text', this.data.pageTitleText[9])
            .and('be.visible')
        cy.title().should('eq', this.data.pageTitleText[10])
    });

    it('Go to the page "Sign In"', function () {

        header
            .clickNavLinkSignIn()
            .elements.pageTitleSignIn().should('have.text', this.data.pageTitleText[11])
            .and('be.visible')
    });

    it('Open / close dropdown menu "Support"', function () {

        header.elements.navDropdownMenuSupport().should('not.be.visible')
        header
            .clickNavLinkSupport()
            .elements.navDropdownMenuSupport()
            .should('be.visible')
        header.elements.navDropdownMenuList().each((item, index) => {
            expect(item.text()).to.eq(this.data.navDropdownMenu[index])
        })
        header
            .clickNavLinkSupport()
            .elements.navDropdownMenuSupport()
            .should('not.be.visible')
    });

    it('Dropdown menu > Go to the page "FAQ"', function () {

        header
            .clickNavLinkSupport()
            .clicknavDropdownMenuLinkFAQ()
            .elements.pageTitle().should('have.text', this.data.pageTitleText[12])
            .and('be.visible')
    });

    it('Dropdown menu > Go to the page "How to start"', function () {

        header
            .clickNavLinkSupport()
            .clicknavDropdownMenuLinkStart()
            .elements.pageTitle().should('have.text', this.data.pageTitleText[13])
            .and('be.visible')
    });

    it('Dropdown menu > Go to the page "Ask a question"', function () {

        header
            .clickNavLinkSupport()
            .clicknavDropdownMenuLinkQuestion()
            .elements.pageTitleQuestion().should('have.text', this.data.pageTitleText[14])
            .and('be.visible')
    });

});