function solve(array){
    let result = [];
    let assendingSortedArray = array.sort((a, b) => a-b);
    
    for (let index = 0; index < array.length/2; index++) {
        result.push(assendingSortedArray[index]);
        if (assendingSortedArray[index] === assendingSortedArray[assendingSortedArray.length - 1 - index] ) {
            break;
        }
        result.push(assendingSortedArray[assendingSortedArray.length - 1 - index]);

        if (assendingSortedArray[index] === assendingSortedArray[assendingSortedArray.length - 1 - index] ) {
            break;
        }
        // if (index===assendingSortedArray.length - 2 - index)  {
        //     result.push(assendingSortedArray[assendingSortedArray.length - 2 - index]); 
        // }
    }
    return result;
    //console.log(result.join('\n'));
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 11]);