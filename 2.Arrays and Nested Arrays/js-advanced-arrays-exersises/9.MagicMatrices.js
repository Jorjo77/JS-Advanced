function solve(matrix) {
    let sum = matrix[0].reduce((a,b)=> a+b, 0);
    let currSum = 0;
    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
currSum = matrix[row].reduce((a,x) => a+x);
        if (currSum !== sum) {
            isMagic = false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        currSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            let element = matrix[row][col];
            currSum += element;
        }
        if (currSum !== sum) {
            isMagic = false;
        }
    }
console.log(isMagic);
}
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]                    
   );