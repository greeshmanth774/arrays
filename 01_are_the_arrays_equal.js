
function areEqual(array1, array2) {
    const lastIndexOfA1 = array1.length - 1;
    const lastIndexOfA2 = array2.length - 1;

    let arraysAreEqual = true;


    if (lastIndexOfA1 !== lastIndexOfA2) return false;

    for (let i = 0; i <= lastIndexOfA1 && arraysAreEqual; i++) {

        if (array1[i].length > 0) {
            arraysAreEqual = arraysAreEqual && areEqual(array1[i], array2[i]);
        }
        else {
            arraysAreEqual = arraysAreEqual && (array1[i] === array2[i]);
        }
    }

    return arraysAreEqual;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

let equal = areEqual(array1, array2)
console.log(equal);



