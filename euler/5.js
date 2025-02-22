function getSmallestNumberDividedByAllInterval(start, final) {
    var candidate = 1;
    var currentDivisor = start;

    while (currentDivisor <= final) {
        if (candidate % currentDivisor === 0) {
            currentDivisor++;
        } else {
            currentDivisor = start;
            candidate++;
        }
    }

    return candidate;
}

function main() {
    var startInterval = 1;
    var finalInternal = 20;
    const smallestNumber = getSmallestNumberDividedByAllInterval(startInterval, finalInternal);

    console.log(smallestNumber);
}


main();