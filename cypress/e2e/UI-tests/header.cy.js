/// <reference types="cypress" />

import "cypress-real-events/support"
import Header from "../../pageObjects/Header"; Header

const header = new Header();

/* Чек-лист - navigation Проверка меню
- правильное наименование пунктов меню
--- унификация названий   (проверка по стилям)
- открытие/закрытие выпадающего списка в меню
- переход по ссылкам в выпадающем меню
- переход по ссылкам, верный endpoint, правильный заголовок на странице (соответствие названия окна в зависимости от назначения страницы)
--- нажатие с помощью мыши
--- нажатие с помощью клавиши Enter
- подсветка пункта меню (css оформление) при наведение мышки
 */

describe ('Testing navigation', ()=> {

    beforeEach(function () {
        cy.visit('/');
        cy.fixture('weatherData').then((data) => {
            this.data = data;
        });
    });

    it('Correct name of menu items', function () {

        header.elements.allNavMenu().each((item, index) => {
            expect(item.text()).to.eq(this.data.navigationMainMenu[index])
        })
    });

    it ('Unification of menu items', function () {
        header.elements.allNavMenu().each(($el, idx) => {
            cy.wrap($el).should('have.css', 'color', 'rgb(242, 242, 242)')
                .and('have.css', 'font-family', '"Space Grotesk", Arial, sans-serif')
                .and('have.css', 'font-size', '16px')
        })
    });

})