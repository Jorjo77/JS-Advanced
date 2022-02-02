function equalNeighbors(array){
    let count = 0;
    let doubledElements = [];
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            let currElement = array[row][col];
            if (row+1 < array.length && currElement.localeCompare(array[row+1][col])===0) {
                doubledElements.push(currElement);
            } else if (col+1 < array.length && currElement.localeCompare(array[row][col+1])===0) {
                doubledElements.push(currElement);
            }
        }       
    }

    console.log(doubledElements.length);
}
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);