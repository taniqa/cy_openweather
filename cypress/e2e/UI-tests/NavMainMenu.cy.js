/// <reference types="cypress" />
import "cypress-real-events/support" //подключение библиотеки

// navigation Проверка меню
/* чек-лист
- правильное наименование пунктов меню
--- унификация названий   (проверка по стилям)
- открытие/закрытие выпадающего списка в меню
- переход по ссылкам в выпадающем меню
- переход по ссылкам, верный endpoint, правильный заголовок на странице (соответствие названия окна в зависимости от назначения страницы)
--- нажатие с помощью мыши
--- нажатие с помощью клавиши Enter
- срабатывание ссылки только при клике на саму ссылку, а не на пустую область
- подсветка пункта меню (css оформление) при наведение мышки
 */

//
describe ('Testing navigation main menu', ()=> {

    let nameMenu = "div#desktop-menu > ul > li > a, div#support-dropdown"


    beforeEach(function () {
        cy.visit('/');
        cy.fixture('weatherData').then((data) => {
            this.data = data;
        });
    })

    it('Correct name of menu items', function () {

        cy.get(nameMenu).each((item, index) => {
            expect(item.text()).to.eq(this.data.navigationMainMenu[index])
        })
    });

    it ('Unification of menu items', function () {
        cy.get (nameMenu).each(($el, idx) => {
        cy.wrap($el).should('have.css', 'color', 'rgb(242, 242, 242)')
            .and('have.css', 'font-family', '"Space Grotesk", Arial, sans-serif')
            .and('have.css', 'font-size', '16px')
        })
    });


})