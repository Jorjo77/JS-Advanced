function extractIncreasingSubsequence(array){
    let resultArray = [];
    let biggestElement = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element >= biggestElement) {
            biggestElement = element;
            resultArray.push(element);
        }
        
    }
    //console.log(resultArray);
    return resultArray;
}
extractIncreasingSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]     
    );