function processString(input){
    // TODO
    if (input.length === 0) {
        return 100;
    }

    const tokens = input.split(' ');

    const sumOfEvenNumbers = tokens.reduce((sum, token) => {
        const parsedToken = parseFloat(token);

        if (isNaN(parsedToken) || !Number.isInteger(parsedToken)) {
            throw new Error('Item is not a number');
        }

        if (parsedToken % 2 === 0) {
            return sum + parsedToken;
        }

        return sum;
    }, 0);

    return 100 - sumOfEvenNumbers;
    
}

const app = {
    processString: processString
}

module.exports = app