
describe ("GET /200ok", () => {

    let latitude = "41.642";
    let longitude = "41.636";

    beforeEach(function () {
        cy.viewport (300,500);
    });

    it('Check status 200ok', () => {
        cy.api( {
            method: 'GET',
            url: `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5fc0795fcbfb2581f15b5a22efa4489e`})

            .then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it('Check property', () => {
        cy.api( {
            method: 'GET',
            url: `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5fc0795fcbfb2581f15b5a22efa4489e`})

            .then((response) => {
                expect(response.body).have.property('name', 'Batumi')
            })
    });
})