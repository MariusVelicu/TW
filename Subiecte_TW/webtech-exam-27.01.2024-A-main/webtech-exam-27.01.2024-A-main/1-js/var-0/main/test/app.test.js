const { objectMap} = require('./../app')

describe('Test objectMap function', () => {
    test('first input should be an object', (done) => {
        expect(() => {
            objectMap('a string', () => {})
        }).toThrow('First input should be an object')
        done()
    });
    test('second input should be a function', (done) => {
        expect(() => {
            objectMap({ a: 1 }, '')
        }).toThrow('Second input should be a function')
        done()
    })
    test('works correctly on empty object', (done) => {
        expect(objectMap({ }, e => e + 'b')).toEqual({ })
        done()
    });
    test('works correctly on non empty object', (done) => {
        expect(objectMap({ a: 'a' }, function(e) {
                return e + 'b'
            })).toEqual({ a: 'ab' })
        done()
    })
    test('works correcly on complex inputs', (done) => {
        expect(objectMap({ a: [], b: [1, 2, 3] }, e => e.length)).toEqual({ a: 0, b: 3 })
        done()
    })
});