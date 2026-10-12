function lengthOfWords(array) {

    const lengthOfWords = [];
    const lastIndex = array.length - 1;

    for (let i = 0; i <= lastIndex; i++) {

        lengthOfWords[i] = array[i].length;

    }
    return lengthOfWords;
}

const a = ["apple", "cat", "Four"];
const b = lengthOfWords(a);

console.log(a);
console.log(b);