function solve(array, step) {
    let result = [];
    let stepNumber = Number(step);
    for (let index = 0; index < array.length; index+=stepNumber) {
        let element = array[index];
        result.push(element);
    }
    return result;
}
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);