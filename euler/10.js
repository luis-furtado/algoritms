function nextPrime(number) {
    if (number === 2) return 3;
    var candidate = number + 2;
    while (!isPrime(candidate)) candidate+=2;
    return candidate;
}

function isPrime(number) {
    if (number < 2) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i * i <= number; i+= 2) {
        if (number % i === 0) return false;
    }
    return true;
}

function getPrimeSum(number) {
    var totalSum = 0;
    var currentPrimeNumber = 2;
    while (currentPrimeNumber < number) {
        totalSum+= currentPrimeNumber;
        currentPrimeNumber = nextPrime(currentPrimeNumber);
    }

    return totalSum;
}

function main() {
    n = 10;
    let primeSum = getPrimeSum(n);

    console.log(primeSum);
}


main();