const { updateProperty } = require('./../app')

describe('Test updateProperty function', () => {
    test('first input should be an array', (done) => {
        expect(() => {
            updateProperty('a string', '', () => {})
        }).toThrow('First input should be an array')
        done()
    })
    test('each element should be an object', (done) => {
        expect(() => {
            updateProperty(['a string'], '', () => {})
        }).toThrow('Each element should be an object')
        done()
    })
    test('second input should be a string', (done) => {
        expect(() => {
            updateProperty([], 4, () => {})
        }).toThrow('Second input should be a string')
        done()
    })
    test('third input should be a function', (done) => {
        expect(() => {
            updateProperty([], 'a', 'b')
        }).toThrow('Third input should be a function')
        done()
    })
    test('works correcly on valid inputs', (done) => {
        const sample =  [{ a: 1, b: 2 }, { b: 1 }, { a: 2}]
        updateProperty(sample, 'b', e => e * 2)
        expect(sample).toEqual([{ a: 1, b: 4 }, { b: 2 }, { a: 2}])
        done()
    })
});