function sumOfMultiples(n, numbersToBeMultiples) {
    let totalSumOfMultiples = 0;
    for (i = 1; i < n; i++) {
        for (j = 0; j < numbersToBeMultiples.length; j++) {
            if (i % numbersToBeMultiples[j] == 0) {
                totalSumOfMultiples+=i;
                break;
            }
        }
    }
    
    return totalSumOfMultiples;
}

function main() {
    let n = 1000;
    let numbersToBeMultiples = [3, 5];

    let totalSumOfMultiples = sumOfMultiples(n, numbersToBeMultiples);

    console.log('Total = ', totalSumOfMultiples);
}


main();