function createObject(cityName, cityPopulation, cityTresury) {
    let city = {};
    city.name = cityName;
    city.population = cityPopulation;
    city.treasury = cityTresury;
    return city;
}
createObject('Tortuga',
7000,
15000
);

//refactoring
function createObject(cityName, cityPopulation, cityTresury) {
    return {
    cityName,
    cityPopulation,
    cityTresury,

};
}
console.log(createObject('Tortuga',
7000,
15000
));