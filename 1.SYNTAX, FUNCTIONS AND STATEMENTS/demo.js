function printSomrthing(){//The first way - Function Drclaration
    console.log(text);
}

let printMessage = function(text){//The second way - Function Expresion
    console.log(text);
}
printMessage('kfghklljhl');

//First-class Functions
function running() {
    return "Running"; 
    }
    
    function category(run, type) {    
    console.log(run() + " " + type);   
    }
    category(running, "sprint"); //Running sprint

    //Nested Functions
    function hypotenuse(m, n) { // outer function

        function square(num) { // inner function
        return num * num;
        }
        return Math.sqrt(square(m) + square(n));
        }

//Hosting variables
console.log(num); // Returns undefined
var num;
num = 6;

num = 6;
console.log(num); // returns 6
var num;

num = 6;
console.log(num); // ReferenceError: num is not defined
let num;

console.log(num); // ReferenceError: num is not defined
num = 6;

//Hosting functions
run(); // running
function run() {
console.log("running");
};

walk(); // ReferenceError: walk is not defined
let walk = function () {
console.log("walking");
};

console.log(walk); //undefined
walk(); // TypeError: walk is not a function
var walk = function () {
console.log("walking");
};
