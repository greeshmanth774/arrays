function filterAbove(array, searchElement) {

    const lastIndex = array.length - 1;
    let index = -1

    for (let i = lastIndex; i >= 0; --i) {

        if (array[i] === searchElement) {
            index = i;
            break;
        }

    }
    return index;
}

const a = [3, 2, 4, 5, 7, 7, 4, 4];
const b = filterAbove(a, 7);

console.log(a);
console.log(b);