const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test delete /people', () => {
  
    test('If the request is sent with no parameters server should respond with  a code of 400 and body {"message": "nothing to delete"}', (done) => {
        request(app).delete('/people')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('nothing to delete')
                done()
            })
    })

    test('If the request is send with parameters that cannot be converted to int server should respond with  a code of 400 and body {"message": "at least some ids are non numeric"}', (done) => {
        request(app).delete('/people?ids=1,a')
            .send()
            .expect(400)
            .then(res => {
                expect(JSON.parse(res.text).message).toBe('at least some ids are non numeric')
                done()
            })
    })


    test('The request works with 1 id and returns code 202 and body {"id": 1, "status": "deleted"}', (done) => {
        request(app).delete('/people?ids=1')
            .send()
            .expect(202)
            .then(res => {
                expect(JSON.parse(res.text)).toEqual([{"id": 1, "status": "deleted"}])
                done()
            })
    })

    test('The request works with multiple existing ids and returns code 202 the deletion status', (done) => {
        request(app).delete('/people?ids=2,3')
            .send()
            .expect(202)
            .then(res => {
                expect(JSON.parse(res.text)).toEqual([{"id": 2, "status": "deleted"}, {"id": 3, "status": "deleted"}])
                done()
            })
    })

    test('The request works with multiple ids and returns code 202 the deletion status', (done) => {
        request(app).delete('/people?ids=4,11')
            .send()
            .expect(202)
            .then(res => {
                expect(JSON.parse(res.text)).toEqual([{"id": 4, "status": "deleted"}, {"id": 11, "status": "not found"}])
                done()
            })
    })
})



