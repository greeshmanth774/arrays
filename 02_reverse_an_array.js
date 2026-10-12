
function reverse(array) {

    const reverse = [];

    const lastIndex = array.length - 1;

    for (let i = lastIndex; i >= 0; --i) {

        reverse[lastIndex - i] = array[i];

    }
    return reverse;
}

const a = [10, 40, 30];
const b = reverse(a);

console.log(a);
console.log(b);