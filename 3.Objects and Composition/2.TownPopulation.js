function townsDatabase(array) {
    let database = {};

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let splittedElements = element.split(' <-> ');
    let key = splittedElements[0];
    let value = Number(splittedElements[1]);
    if (database[key]) {
        value += database[key];
    } else {
        database[key] = value;
    }
}
for (const key in database) {
console.log(key + ' : ' + database[key]);
}
    
}
townsDatabase(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);

//refactoring
function townsDatabase(array) {
    let database = {};

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let [key, value] = element.split(' <-> ');
    value = Number(value);

    if (database[key]) {
        value+=database[key];
    } 
        database[key] = value;
}
for (const key in database) {
console.log(key + ' : ' + database[key]);
}
    
}
townsDatabase(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);