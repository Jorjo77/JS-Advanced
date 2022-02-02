function solve(arr) {
    let result = [];
for (let index = 0; index < arr.length; index++) {
    if (index % 2!==0) {
        result.push(arr[index]);
    }   
}
result.reverse(); 
let mappedResult = result.map(x=>x *2);
//let mappedResult = result.reverse().map(x=>x *2);а може и така да се чейнат!
console.log(mappedResult.join(' '));
}
solve([3, 0, 10, 4, 7, 3]);