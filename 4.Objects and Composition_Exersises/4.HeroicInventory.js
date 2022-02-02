function heroesRegister(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let [name, level, itemsString] = array[index].split(' / ');
        level = Number(level);
        arr = itemsString ? itemsString.split(', ') : [];
        let hero = {
            name,
            level,
            items: arr,
        };
        result.push(hero);

    }
    return JSON.stringify(result);
}
console.log(heroesRegister(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));