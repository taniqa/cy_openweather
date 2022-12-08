
describe ("GET /200ok", () => {

    let latitude = "41.642";
    let longitude = "41.636";
    let city
    let temp
    let country

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

    it('Check contains element with key weather and value id', () => {
        cy.api( {
            method: 'GET',
            url: `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5fc0795fcbfb2581f15b5a22efa4489e`})

            .then((response) => {
                expect(response.body.weather[0]).have.property('id')
            })
    });

//получение данных из response и запись их в переменные
        it('Put data from response to varible', () => {
            cy.api( {
                method: 'GET',
                url: `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5fc0795fcbfb2581f15b5a22efa4489e`})

                .then((response) => {
                    city = response.body.name
                    temp = response.body.main.temp
                    country = response.body.sys.country
                    console.log(city, temp, country)
                })
    });

})