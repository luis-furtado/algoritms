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

function getLargestPrimeFactor(number) {
    var currentPrimeFactor = 2;

    while (true) {
        if (isPrime(currentPrimeFactor)) {
            if (number <= currentPrimeFactor) return currentPrimeFactor;
            while (number % currentPrimeFactor === 0) {
                number = number / currentPrimeFactor;
            }
        }
        currentPrimeFactor = nextPrime(currentPrimeFactor);

        if (number === 1) return currentPrimeFactor;
    }
}

function main() {
    n = 600851475143;
    let largestPrimeFactor = getLargestPrimeFactor(n);

    console.log('largestPrimeFactor', largestPrimeFactor);
}


main();