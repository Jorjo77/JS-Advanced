function biggestElement(array) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            let currElement = array[row][col]; 
            if (currElement > maxNumber) {
                maxNumber =  currElement;
            }   
        }    
    }
    console.log(maxNumber);
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   );