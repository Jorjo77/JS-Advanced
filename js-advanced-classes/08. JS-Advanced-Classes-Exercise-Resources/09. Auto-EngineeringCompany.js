function solve(input) {
    let carBrands = new Map();

    for (const line of input) {
        let[brand, model, produced] = line.split(' | ');

        if (!carBrands.has(brand)) {
            carBrands.set(brand, new Map());
        }

        let carModels = carBrands.get(brand);

        if (!carModels.has(model)) {
            carModels.set(model, 0);
        }
        carModels.set(model, carModels.get(model) + Number(produced));
    }

    for (const brand of carBrands.keys()) {
        console.log(brand);
        let carModels = carBrands.get(brand);
        for (const model of carModels.keys()) {
            console.log(`###${model} -> ${carModels.get(model)}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);






































// function solve(input) {
//     let mapCars = new Map();
//     for (const line of input) {
//         let [brand, model, produced] = line.split(' | ');
//         if (!mapCars.has(brand)) {
//             mapCars.set(brand, new Map());//слагаме вътрешен мап на value-то на mapCars
//         }
//         let mapModels = mapCars.get(brand);//mapCars.get(brand) - дава стойността на този бранд - празния мап
//         if (!mapModels.has(model)) {
//             mapModels.set(model, 0);//тук слагаме ст-ст на key-a (model) и 0 на value-то
//         }
//         mapModels.set(model, mapModels.get(model) + Number(produced));//тук на вече записания модел(key-a) set-ваме ст-стта(value-то) - mapModels.get(model) - дава какво има записано за момента на value-то и с + му добавяме produced  
//     }
//     for (const brand of mapCars.keys()) {//тук за всеки ключ на mapCars 
//         console.log(brand);//логваме ключа
//         let mapModels = mapCars.get(brand);//mapModels е вътрешния мап
//         for (const model of mapModels.keys()) {//минаваме по ключовете на вътрешния мап(model-ите)
//             console.log(`###${model} -> ${mapModels.get(model)}`);//така mapModels.get(model) взимаме value-то на model
//         }
//     }
// }
// solve(['Audi | Q7 | 1000',
// 'Audi | Q6 | 100',
// 'BMW | X5 | 1000',
// 'BMW | X6 | 100',
// 'Citroen | C4 | 123',
// 'Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000',
// 'Lada | Jigula | 1000000',
// 'Citroen | C4 | 22',
// 'Citroen | C5 | 10']
// );