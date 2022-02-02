function diagonalSums(array){
    let mainDiagonalSum = 0;
    let secondaryDiadonalSum  = 0;
    let resultArr= [];
    let count =0;
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            let currElement = Number(array[row][col]) ;
            if (row===col) {
                mainDiagonalSum+=currElement;
            }
            if (row===count&&col === array.length -1 -row) {
            secondaryDiadonalSum+=currElement;
           }
        }
        count++;
    }
    resultArr.push(mainDiagonalSum);
    resultArr.push(secondaryDiadonalSum);
    console.log(resultArr.join(' '));
}
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]   
   );