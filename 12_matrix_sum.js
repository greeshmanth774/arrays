function sumMatrix(matrix) {

    let sum = 0;
    const noOfRows = matrix.length;
    const noOfCols = matrix[0].length;

    for (let row = 0; row < noOfRows; row++) {
        for (let col = 0; col < noOfCols; col++) {
            sum = sum + matrix[row][col];
        }
    }

    return sum;
}


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [7, 8, 9],
]

const sum = sumMatrix(matrix);
console.log(sum);


