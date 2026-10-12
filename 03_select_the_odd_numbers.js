function isOdd(array, i) {
    return array[i] % 2 === 1;
}

function oddNumbers(array) {

    const oddNumbers = [];
    let noOfOdds = 0
    const lastIndex = array.length - 1;

    for (let i = 0; i <= lastIndex; i++) {

        if (isOdd(array, i)) {

            oddNumbers[noOfOdds] = array[i];
            noOfOdds++;
        }

    }
    return oddNumbers;
}

const a = [3, 2, 4, 5, 7];
const b = oddNumbers(a);

console.log(a);
console.log(b);

