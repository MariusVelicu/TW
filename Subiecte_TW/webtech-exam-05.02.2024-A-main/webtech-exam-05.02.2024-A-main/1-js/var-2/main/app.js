function generator(initialState) {
    if (typeof initialState !== 'object' || initialState === null) {
        throw new Error('First input should be an object');
    }

    return function(prop, value) {
        if (typeof initialState[prop] === 'object' && typeof value === 'object' && value !== null) {
            // If both the current value and the new value are objects, merge them
            initialState[prop] = { ...initialState[prop], ...value };
        } else {
            // Otherwise, update the property with the new value
            initialState[prop] = value;
        }
    };
}

const app = {
    generator
};

module.exports = app;
