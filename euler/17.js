
function getDictionaryOfNumbers() {
    const dictionaryBaseNumberFromOneToNineteen = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    const dictionaryDecimalNumber = {
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
    };

    return { dictionaryBaseNumberFromOneToNineteen, dictionaryDecimalNumber };
}

function countWords(stopNumber) {
    for (i = 1; i <= stopNumber; i++) {
        if (i < 20) {
            currentNumber = Object.keys(dictionary.dictionaryBaseNumberFromOneToNineteen)[i];
            totalWords+= dictionary.dictionaryBaseNumberFromOneToNineteen[currentNumber].length;
        } else if (i >= 20 || i < 40 || i >= 80 || i < 100) {
            currentDecimalNumber = Object.keys(dictionary.dictionaryDecimalNumber)[i];
        }
    }
}

function getNumberLetterCounts(stopNumber) {
    const dictionary = getDictionaryOfNumbers();
    return countWords(stopNumber);
}

function main() {
    const stopNumber = 5;
    const result = getNumberLetterCounts(stopNumber);

    console.log(result);
}

main();