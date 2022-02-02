function add(num) {
    let sum = 0;

    function inner(number) {
        sum += number;
        return inner;
    }

    inner.toString = () => {
        return sum;
    }

    return inner(num);
}

//let a = add(1)(6)(-3);
let a = add(1);
let b = a(6);
let c = b(-3);
console.log(a.toString());