function sumFirstLast(arr) {
let firstElement = arr[0];
let lastElement = arr[arr.length - 1];
let firstNumber = Number(firstElement);
let lastNumber = Number(lastElement);
let result = firstNumber + lastNumber;
console.log(result);
}
sumFirstLast(['5', '10']);