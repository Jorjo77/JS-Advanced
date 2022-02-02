(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        // let result = [];
        // for (let index = n; index < this.length; index++) {
        //     result.push(this[index]);
        // }
        let result = this.slice(n);
        return result;
    };

    Array.prototype.take = function (n) {
        // let result = [];
        // for (let index = 0; index < n; index++) {
        //     result.push(this[index]);
        // }
        let result = this.slice(0, n);
        return result;
    };

    Array.prototype.sum = function() {
        // let sum = 0;
        // for (let index = 0; index < this.length; index++) {

        //     sum += this[index];
        // }
        let sum = this.reduce((acc, curr) => acc + curr);
        return sum;
    };

    Array.prototype.average = function() {

        result = this.sum()/this.length;
        return result;
    };
}())

let arr = [1, 2, 3];
console.log(arr.last());
console.log(arr.skip(1));
console.log(arr.take(1));
console.log(arr.skip(1).take(2));
console.log(arr.sum());
console.log(arr.average());