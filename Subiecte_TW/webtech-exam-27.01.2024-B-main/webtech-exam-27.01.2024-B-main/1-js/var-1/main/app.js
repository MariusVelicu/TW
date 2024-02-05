function updateProperty(arr, prop, f) {
    // TODO
        // Verifică tipurile de date ale parametrilor și aruncă erori în caz de tip incorect
        if (!Array.isArray(arr)) {
            throw new Error('First input should be an array');
        }
    
        arr.forEach(obj => {
            if (typeof obj !== 'object' || obj === null) {
                throw new Error('Each element should be an object');
            }
        });
    
        if (typeof prop !== 'string' && !(prop instanceof String)) {
            throw new Error('Second input should be a string');
        }
    
        if (typeof f !== 'function') {
            throw new Error('Third input should be a function');
        }
    
        // Aplică funcția pe fiecare obiect din array
        arr.forEach(obj => {
            if (obj.hasOwnProperty(prop)) {
                obj[prop] = f(obj[prop]);
            }
        });
}

const app = {
    updateProperty
}

module.exports = app