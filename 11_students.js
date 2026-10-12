function merits(array, cutOfMarks) {
    const merits = [];
    const lastIndex = array.length - 1;
    let noOfMerits = 0;

    for (let i = 0; i <= lastIndex; i++) {
        if (array[i].marks >= cutOfMarks) {
            merits[noOfMerits] = array[i].name;
            noOfMerits++;
        }
    }
    return merits;
}

const students = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Meera", marks: 91 },
    { name: "Vikram", marks: 72 },
];

const meritsArray = merits(students, 75);
console.log(meritsArray);

