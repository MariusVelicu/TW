const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test get /people', () => {
  
    test('Request works without any filter and returns a code of 200 and body containing all records', (done) => {
        request(app).get('/people')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text).length).toBe(10)
                done()
            })
    })

    test('If an empty key is sent in the query, a code of 400 is returned with the body {"message":"one of the filter keys is not defined"}', (done) => {
        request(app).get('/people?name=')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text)).toEqual({ message: 'one of the filter keys is not defined' })
                done()
            })
    })

    test('Request works with a filter and returns a code of 200 and body containing all matching records', (done) => {
        request(app).get('/people?category=ACTIVE')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text)[0].name).toBeTruthy()
                done()
            })
    })

    test('Request works with a lowercase value for category and job and returns a code of 200 and body containing all matching records', (done) => {
        request(app).get('/people?category=active')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text)[0].name).toBeTruthy()
                done()
            })
    })

    test('Request works with multiple filters returns a code of 200 and body containing all matching records', (done) => {
        request(app).get('/people?category=active&job=programmer')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text)[0].name).toBeTruthy()
                done()
            })
    })


})



