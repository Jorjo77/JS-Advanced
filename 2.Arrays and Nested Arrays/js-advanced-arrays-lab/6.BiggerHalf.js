function solve(arr) {
    let halfArr = [];
    let sortedArr = arr.sort((a, b) => a - b);
    if (arr%2==0) {
        halfArr = sortedArr.splice(sortedArr.length/2 + 1);
        console.log(halfArr);
    } else {
        halfArr = sortedArr.splice(sortedArr.length/2);
        console.log(halfArr);  
    }
}
solve([3, 19, 14, 7, 2, 19, 6]);