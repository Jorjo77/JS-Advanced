function solve(input) {
const {
    model, 
    power,
    carriage, 
    color, 
    wheelsize
} = input;
    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }];

    function getEngine(power) {
        let result = engines.find(x => x.power >= power);
        return result;
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color,
        }
    }

    function getWheels(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 === 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize);
        return [wheel, wheel, wheel, wheel];
    }

    return {
        model,
        engine: getEngine(power),
        carriage: getCarriage(carriage, color),
        wheels: getWheels(wheelsize),
    }

}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));