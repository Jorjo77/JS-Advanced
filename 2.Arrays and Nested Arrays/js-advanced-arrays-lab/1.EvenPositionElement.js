function solve(arr) {
    let result = [];
for (let index = 0; index < arr.length; index+=2) {
    const currElement = arr[index];
    result.push(currElement);
}
console.log(result.join(' '));
}
solve(['20', '30', '40', '50', '60'])