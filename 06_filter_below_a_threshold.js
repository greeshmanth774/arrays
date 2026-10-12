function filterAbove(array, thresh_hold_value) {

    const threshHold_values = [];
    let no_of_threshHolds = 0
    const lastIndex = array.length - 1;

    for (let i = 0; i <= lastIndex; i++) {

        if (array[i] < thresh_hold_value) {

            threshHold_values[no_of_threshHolds] = array[i];
            no_of_threshHolds++;
        }

    }
    return threshHold_values;
}

const a = [3, 2, 4, 5, 7];
const b = filterAbove(a, 7);

console.log(a);
console.log(b);