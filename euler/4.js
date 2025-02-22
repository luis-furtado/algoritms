function isPalindromicNumber(number) {
    if (!number) return false;
    let verifier = number.toString().split('').reverse().join('');

    return verifier === number.toString();
}
function getLargetPalindromicNumber(digitNumbers) {
    var maxProductNumber = Math.pow(10, digitNumbers) - 1;
    var largestPalindromicNumber = 0;

    for (i = 1; i <= maxProductNumber; i ++) {
        for (j = 1; j <= maxProductNumber; j++) {
            let candidate = i * j;
            if (isPalindromicNumber(candidate) && candidate > largestPalindromicNumber) largestPalindromicNumber = candidate;
        }
    }

    return largestPalindromicNumber;
}

function main() {
    var digitNumbers = 3;
    const largestPalindromicNumber = getLargetPalindromicNumber(digitNumbers);

    console.log(largestPalindromicNumber);
}


main();