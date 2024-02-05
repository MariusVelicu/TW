function bowdlerize(input, dictionary) {
    if (typeof input !== 'string')
        throw ('`Input should be a string`');

    for (let i = 0; i < dictionary.length; i++)
        if (typeof dictionary[i] !== 'string')
            throw (`Invalid dictionary format`)


    const words = input.split(/\b/); // Split input into words

    const processedWords = words.map(word => {
        const lowercasedWord = word.toLowerCase();

        if (dictionary.includes(lowercasedWord)) {
            const firstLetter = word[0];
            const lastLetter = word[word.length - 1];

            return firstLetter + '*'.repeat(word.length - 2) + lastLetter;
        }
        return word;
    });

    return processedWords.join('');
    // if (!input || !dictionary) return '';
    // const pattern = new RegExp('\\b(' + dictionary.join('|') + ')\\b', 'gi');
    // return input.replace(pattern, m => m.charAt(0) + '*'.repeat(m.length - 2) + m.charAt(m.length - 1));
}

const app = {
    bowdlerize
};

module.exports = app;