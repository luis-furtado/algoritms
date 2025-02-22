function isElegibleToSum(value) {
    return value % 2 === 0;
}

function getFibonacciSumWithLimit(limit) {
    var totalSum = 0;
    var previousValue = 1;
    var currentValue = 2;
    var storePreviousCurrentValue = null;

    while (currentValue < limit) {
        console.log('current value', currentValue);

        if (isElegibleToSum(currentValue)) totalSum+= currentValue;
        storePreviousCurrentValue = currentValue;
        currentValue = previousValue + currentValue;
        previousValue = storePreviousCurrentValue;
    }

    return totalSum;
}

function main() {
    let limit = 4000000;

    var totalSum = getFibonacciSumWithLimit(limit);

    console.log(totalSum);
}


main();