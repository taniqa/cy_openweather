class Header {
    elements = {
        allNavMenuLink: () => cy.get('div#desktop-menu > ul > li > a, div#support-dropdown'),
        navLinkGuide: () => cy.get('#desktop-menu  a[href*="guide"]'),
        navLinkApi: () => cy.get('#desktop-menu  a[href*="api"]'),
        navLinkDashboard: () => cy.get('#desktop-menu  a[href*="dashboard"]'),
        navLinkMarketplace: () => cy.get('#desktop-menu  a[href*="marketplace"]'),
        navLinkPricing: () => cy.get('#desktop-menu  a[href*="price"]'),
        navLinkMaps: () => cy.get('#desktop-menu  a[href*="/weathermap"]'),
        navLinkInitiatives: () => cy.get('#desktop-menu  a[href*="our-initiatives"]'),
        navLinkPartners: () => cy.get('#desktop-menu  a[href*="examples"]'),
        navLinkBlog: () => cy.get('#desktop-menu  a[href*="blog"]'),
        navLinkBusiness: () => cy.get('#desktop-menu  a[href="https://openweather.co.uk"]'),
        navLinkSignIn: () => cy.get('#desktop-menu  a[href*="sign_in"]'),

        pageTitle: () => cy.get('h1.breadcrumb-title'),
        pageTitleMarketplace: () => cy.get('#custom_weather_products h1'),
        pageTitleBusiness: () => cy.get('div.mobile-padding h1'),
        pageTitleSignIn: () => cy.get('div.sign-form h3')

    }

    clickNavLinkGuide() {
        this.elements.navLinkGuide().click()
    };
    clickNavLinkApi() {
        this.elements.navLinkApi().click()
    };
    clickNavLinkDashboard() {
        this.elements.navLinkDashboard().click()
    };
    clickNavLinkMarketplace() {
        this.elements.navLinkMarketplace().invoke('removeAttr', 'target').click()
    };
    clickNavLinkPricing() {
        this.elements.navLinkPricing().click()
    };
    clickNavLinkMaps() {
        this.elements.navLinkMaps().click()
    };
    clickNavLinkInitiatives() {
        this.elements.navLinkInitiatives().click()
    };
    clickNavLinkPartners() {
        this.elements.navLinkPartners().click()
    };
    clickNavLinkBlog() {
        this.elements.navLinkBlog().invoke('removeAttr', 'target').click()
    };
    clickNavLinkBusiness() {
        this.elements.navLinkBusiness().invoke('removeAttr', 'target').click()
    };
    clickNavLinkSignIn() {
        this.elements.navLinkSignIn().click()
    };



}

export default Header;