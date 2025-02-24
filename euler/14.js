


function getNextChainNumber(currentNumber) {
    if (currentNumber % 2 === 0) {
        return currentNumber / 2;
    } else {
        return (currentNumber * 3) + 1
    }
}

function getStartingNumberWithLongestCollatzSequence(limit) {
    var biggestChainSize = 0;
    var startingNumberWithBiggestChainSize = null;
    for (let i = 2; i < limit; i++) {
        let currentChainSize = 0;
        let currentNumberInChain = i;
        while (currentNumberInChain !== 1) {
            currentChainSize++;
            currentNumberInChain = getNextChainNumber(currentNumberInChain);
        }
        if (biggestChainSize < currentChainSize) {
            biggestChainSize = currentChainSize;
            startingNumberWithBiggestChainSize = i;
        }
    }

    return startingNumberWithBiggestChainSize
}

function main() {
    const limitStartingNumber = 1000000;
    const response = getStartingNumberWithLongestCollatzSequence(limitStartingNumber);

    console.log(response);
}

main();