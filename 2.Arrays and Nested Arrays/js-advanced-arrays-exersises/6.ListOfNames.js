function listOfNames(array) {
let sortedArray = array.sort((a, b) => a.localeCompare(b));
for (let index = 0; index < sortedArray.length; index++) {
    const element = sortedArray[index];
    console.log(`${index +1+'.'}${element}`);
    
}
}
listOfNames(["John", "Bob", "Christina", "Ema"]);