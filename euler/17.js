
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
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    const dictionaryHundredWords = {
        100: 'onehundred',
        200: 'twohundred',
        300: 'threehundred',
        400: 'fourhundred',
        500: 'fivehundred',
        600: 'sixhundred',
        700: 'sevenhundred',
        800: 'eighthundred',
        900: 'ninehundred',
    }

    return { 
        dictionaryHundredWords,
        dictionaryDecimalNumber,
        dictionaryBaseNumberFromOneToNineteen,
    };
}

function countZeroToNineteenWords(currentNumber, dictionary) {
    if (currentNumber > 0 && currentNumber < 20) {
        return dictionary[currentNumber].length;
    }

    return 0;
}

function countTwentyToNinetyNineWords(decimalBase, dictionary) {
    if (decimalBase === 2) {
        return dictionary[20].length;
    } else if (decimalBase === 3) {
        return dictionary[30].length;
    } else if (decimalBase === 4) {
        return dictionary[40].length;
    } else if (decimalBase === 5) {
        return dictionary[50].length;
    } else if (decimalBase === 6) {
        return dictionary[60].length;
    } else if (decimalBase === 7) {
        return dictionary[70].length;
    } else if (decimalBase === 8) {
        return dictionary[80].length;
    } else if (decimalBase === 9) {
        return dictionary[90].length;
    }

    return 0;
}

function countHundredWords(decimalBase, dictionary) {
    if (decimalBase === 1) {
        return dictionary[100].length;
    } else if (decimalBase === 2) {
        return dictionary[200].length;
    } else if (decimalBase === 3) {
        return dictionary[300].length;
    } else if (decimalBase === 4) {
        return dictionary[400].length;
    } else if (decimalBase === 5) {
        return dictionary[500].length;
    } else if (decimalBase === 6) {
        return dictionary[600].length;
    } else if (decimalBase === 7) {
        return dictionary[700].length;
    } else if (decimalBase === 8) {
        return dictionary[800].length;
    } else if (decimalBase === 9) {
        return dictionary[900].length;
    }

    return 0;
}

function getNumberLetterCounts(stopNumber) {
    const dictionary = getDictionaryOfNumbers();
    var sum = 0;
    for (i = 1; i <= stopNumber; i++) {
        i.toString().split('').reverse().forEach((baseNumber, j) => {
            // verify if decimal number is just to count zero to nineteen words
            if (j === 0 && ['0', '1'].includes(i.toString().split('').reverse()[1])) {
                return;
            } else if (j === 1 && ['0', '1'].includes(i.toString().split('').reverse()[1])) {
                const num = parseInt(i.toString().split('').reverse()[1].concat(i.toString().split('').reverse()[0]));
                sum+= countZeroToNineteenWords(num, dictionary.dictionaryBaseNumberFromOneToNineteen);
            } else if (j === 0) {
                sum+= countZeroToNineteenWords(parseInt(baseNumber), dictionary.dictionaryBaseNumberFromOneToNineteen);
            } else if (j === 1) {
                sum+= countTwentyToNinetyNineWords(parseInt(baseNumber), dictionary.dictionaryDecimalNumber);
            } else if (j === 2) {
                sum+= countHundredWords(parseInt(baseNumber), dictionary.dictionaryHundredWords);
                if (i.toString().split('').reverse()[1] !== '0' || i.toString().split('').reverse()[0] !== '0') {
                    sum+= 'and'.length;
                }
            } else if (j === 3) {
                sum+= 'onethousand'.length;
            }
        })
    }

    return sum;
}

function main() {
    const stopNumber = 1000;
    const result = getNumberLetterCounts(stopNumber);

    console.log(result);
}

main();