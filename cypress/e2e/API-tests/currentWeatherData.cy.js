
describe ("API tests", () => {

    let latitude = "41.642";
    let longitude = "41.636";
    let keyId = "5fc0795fcbfb2581f15b5a22efa4489e";
    let city
    let temp
    let country

    const getResponseApi = () =>
        cy.api({
            method: 'GET',
            url: `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyId}`
        })

    beforeEach(function () {
        cy.viewport (300,500);
    });

    it('Check status 200ok', () => {
        getResponseApi()
            .then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it('Check property', () => {
        getResponseApi()
            .then((response) => {
                expect(response.body).have.property('name', 'Batumi')
            })
    });

    it('Check contains element with key weather and value id', () => {
        getResponseApi()
            .then((response) => {
                expect(response.body.weather[0]).have.property('id')
            })
    });

//получение данных из response и запись их в переменные
        it('Put data from response to varible', () => {
            getResponseApi()
                .then((response) => {
                    city = response.body.name
                    temp = response.body.main.temp
                    country = response.body.sys.country
                    console.log(city, temp, country)
                })
    });
});