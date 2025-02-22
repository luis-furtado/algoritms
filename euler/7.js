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

function getValueOfPrimeNumberByIndex(index) {
    var currentPrimeIndex = 0;
    var currentPrime = null;

    while (currentPrimeIndex < index) {
        currentPrime = nextPrime(currentPrime);
        currentPrimeIndex++;
    }

    return currentPrime;
}

function main() {
    const index = 10001;
    const primeNumber = getValueOfPrimeNumberByIndex(index);

    console.log(primeNumber);
}


main();