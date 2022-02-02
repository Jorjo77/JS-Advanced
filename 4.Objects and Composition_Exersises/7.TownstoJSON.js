function solve(input) {
let result = {};

let [head, ... values] = input;

function convertIfNum(x) {
    return isNaN(x) ? x : Number(Number(x).toFixed(2));
}

function splitLine(input){
    return input.split('|').filter(x=>x==="").map(convertIfNum);
}

// result[head[0]] = values[0];
// result[head[1]] = values[1];
// result[head[2]] = values[2];

return JSON.stringify(values.map(splitLine));

}
console.log(solve(['| Town | Latitude | Longitude |',
                   '| Sofia | 42.696552 | 23.32601 |',
                   '| Beijing | 39.913818 | 116.363625 |']
));