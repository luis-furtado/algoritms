
function getSumOfNumbersExponentByTwoBase(exponent) {
    var sum = 0;
    BigInt(Math.pow(2, exponent))
        .toString()
        .split('')
        .forEach((number) => sum+= parseInt(number));

    return sum;
}

function main() {
    const exponent = 15;
    const result = getSumOfNumbersExponentByTwoBase(exponent);

    console.log(result);
}

main();