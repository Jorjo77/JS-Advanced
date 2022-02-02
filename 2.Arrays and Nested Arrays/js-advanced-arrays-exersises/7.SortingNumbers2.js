function solve(array) {
    array.sort((a,b)=>a-b);
    let resultArray = [];
    while (array.length > 0) {
        resultArray.push(array.shift());
        if (array.length !== 0) {
            resultArray.push(array.pop());
        }
    }
//console.log(resultArray);
return resultArray;
} 
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);