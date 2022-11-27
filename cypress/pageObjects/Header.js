class Header {
elements = {
allNavMenu: () => cy.get("div#desktop-menu > ul > li > a, div#support-dropdown")
}


}
export default Header;