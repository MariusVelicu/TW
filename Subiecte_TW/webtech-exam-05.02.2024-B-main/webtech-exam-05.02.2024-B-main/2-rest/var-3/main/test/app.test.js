const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test get /people', () => {
  
    test('Request works without any paging and returns a code of 200 and body containing all records', (done) => {
        request(app).get('/people')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text).length).toBe(100)
                done()
            })
    })

    test('If an invalid page is sent a 400 code is returned with the body {"message":"page should be a number"}', (done) => {
        request(app).get('/people?page=a')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text)).toEqual({ message: 'page should be a number' })
                done()
            })
    })

    test('Request works with a page and default page size of 10 and returns a code of 200 and body containing all matching records', (done) => {
        request(app).get('/people?page=1')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text).length).toBe(10)
                done()
            })
    })

    test('If an invalid page size is sent a 400 code is returned with the body {"message":"page size should be a number"}', (done) => {
        request(app).get('/people?pageSize=a&page=1')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text)).toEqual({ message: 'page size should be a number' })
                done()
            })
    })

    test('Request works with a valid page and page size and returns a code of 200 and body containing all matching records', (done) => {
        request(app).get('/people?pageSize=3&page=1')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text).length).toBe(3)
                done()
            })
    })


})



