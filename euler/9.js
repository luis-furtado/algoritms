function findProductOfPythagorean(totalSum) {
    for (let i = 0; i <= totalSum; i++) {
        for (let j = 0; j <= totalSum; j++) {
            for (let k = 0; k <= totalSum; k++) {
                if (i + j + k === totalSum 
                    && i < j && j < k 
                    && ((Math.pow(i, 2) + Math.pow(j, 2)) === Math.pow(k, 2))
                ) {
                    return i * j * k;
                } 
            }
        }
    }
}

function main() {
    const totalSum = 1000;

    const result = findProductOfPythagorean(totalSum);

    console.log(result);
}


main();