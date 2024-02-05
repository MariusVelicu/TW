function objectMap(o, f) {
    // TODO
    if (typeof o !== 'object') {
        throw new Error('First input should be an object');
    }

    // Verifică dacă `f` este o funcție
    if (typeof f !== 'function') {
        throw new Error('Second input should be a function');
    }

    // Returnează un obiect vid dacă `o` este un obiect vid
    if (Object.keys(o).length === 0) {
        return {};
    }

    // Creează un nou obiect aplicând funcția `f` la fiecare valoare a cheii în `o`
    const result = {};
    for (const key in o) {
        if (Object.prototype.hasOwnProperty.call(o, key)) {
            result[key] = f(o[key]);
        }
    }

    return result;
}

const app = {
    objectMap
}

module.exports = app