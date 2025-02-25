function calculateFactorial(number) {
    var total = number;
    number--;
    while (number) {
        total*=number;
        number--;
    }

    return BigInt(total);
}

function main() {
    const totalMoves = 40;
    const totalMoveForEachDirection = 20;

    const totalPossibilites = calculateFactorial(totalMoves) 
        / (calculateFactorial(totalMoveForEachDirection) * calculateFactorial(totalMoveForEachDirection));

    console.log(totalPossibilites);
}

main();