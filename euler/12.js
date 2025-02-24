function getNextTriangleNumber(previous, currentPosition) {
    return previous+= currentPosition;
}

function getCountDivisors(triangleNumber) {
    var totalDivisors = 0;

    for (let i = 1; i <= Math.sqrt(triangleNumber); i++) {
        if (triangleNumber % i === 0) {
            totalDivisors+=2;
        }
    }

    return totalDivisors;
}

function getFirstTriangleNumberByDivisorsCount(divisors) {
    var currentPosition = 1;
    var triangleNumber = 1;
    while (getCountDivisors(triangleNumber) <= divisors) {
        currentPosition++;
        triangleNumber = getNextTriangleNumber(triangleNumber, currentPosition);
    }
    return triangleNumber;
}


function main() {
    const totalDivisors = 500;
    const triangleNumber = getFirstTriangleNumberByDivisorsCount(totalDivisors);
    console.log(triangleNumber);
}

main();