function solve(arr, startPie, endPie) {

let startIndex = arr.indexOf(startPie);
let endIndex = arr.indexOf(endPie) +1;

 let result = arr.slice(startIndex, endIndex)
 console.log(result);    
}
solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)