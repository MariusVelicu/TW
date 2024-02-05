const { Person, Student } = require('./../app')

describe('Test object types', () => {
    test('Person is an object type', (done) => {
        expect(typeof Person).toBe('function')
        done()
    })

    test('Student is an object type', (done) => {
        expect(typeof Person).toBe('function')
        done()
    })

    test('Student inherits Person', (done) => {
        const s = new Student('', '', '')
        expect(s).toBeInstanceOf(Person)
        done()
    })

    test('A student can call its own method correctly', (done) => {
        const s = new Student('Ionut', 'Popescu', 'Informatica')
        expect(s.study()).toBe('Ionut Popescu is studying at Informatica')
        done()
    })

    test('A student can call its parents method correctly', (done) => {
        const s = new Student('Ionut', 'Popescu', 'Informatica')
        expect(s.walk()).toBe('Ionut Popescu is walking')
        done()
    })
})