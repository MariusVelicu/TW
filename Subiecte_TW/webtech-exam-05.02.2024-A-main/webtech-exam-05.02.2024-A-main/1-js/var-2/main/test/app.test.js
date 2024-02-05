const { generator } = require('./../app')

describe('Test generator function', () => {
    test('first input should be an object', (done) => {
        expect(() => {
            generator(() => {})
        }).toThrow('First input should be an object')
        done()
    })

    test('function returns a function', (done) => {
        expect(typeof generator({})).toBe('function')
        done()
    })

    test('function modifies state', (done) => {
        const state = { a: 1 }
        const set = generator(state)
        set('a',  2)
        expect(state).toEqual({ a: 2 })
        done()
    })

    test('multiple states can be managed', (done) => {
        const state1 = { a: 1 }
        const set1 = generator(state1)
        const state2 = { a: 2 }
        const set2 = generator(state2)
        set1('b',  2)
        set2('c',  3)
        expect(state1).toEqual({ a: 1, b: 2 })
        expect(state2).toEqual({ a: 2, c: 3 })
        done()
    })

    test('function can modify complex state values', (done) => {
        const state = { a: 1, b: { c: 1} }
        const set = generator(state)
        set('b',  { c: 2 })
        expect(state).toEqual({ a: 1, b: { c: 2} })
        done()
    })
})