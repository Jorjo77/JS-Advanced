function solution(num) {

    function inner(curr) {
        let result = num;
        result += curr;
        return result;
    }
    return inner;
}
let add5 = solution(7);
console.log(add5(2));
console.log(add5(3));
