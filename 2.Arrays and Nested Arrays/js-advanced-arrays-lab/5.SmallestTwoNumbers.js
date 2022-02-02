function solve(arr) {
    let sortedArr = arr.sort((a, b) => a - b);

    let[firstElement, secondElement] = sortedArr;
    console.log(firstElement, secondElement);
}
solve([3, 0, 10, 4, 7, 3]);