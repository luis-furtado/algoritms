function getSumOfSquaresByInterval(start, end) {
    var sum = 0;

    for (i = start; i <= end; i++) {
        sum+= i * i;
    }

    return sum;
}

function getSquareOfSumByInterval(start, end) {
    var sum = 0;

    for (i = start; i <= end; i++) sum+= i;

    return sum * sum;
}

function main() {
    var start = 1;
    var end = 100;
    const sumOfSquares = getSumOfSquaresByInterval(start, end);
    const squareOfSum = getSquareOfSumByInterval(start, end);

    console.log(sumOfSquares);
    console.log(squareOfSum);
    console.log(squareOfSum - sumOfSquares);
}


main();