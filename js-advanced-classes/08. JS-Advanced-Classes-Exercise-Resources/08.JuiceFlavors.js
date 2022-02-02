function solve(juicesInput) {

    let juicesQuantity = new Map();
    let bottles = new Map();

    for (let index = 0; index < juicesInput.length; index++) {
        let [juiceName, quantity] = juicesInput[index].split(' => ');
        quantity = Number(quantity);

        if (!juicesQuantity.has(juiceName)) {
            juicesQuantity.set(juiceName, 0);
        }

        let totalAmount = juicesQuantity.get(juiceName) + quantity;

        if (totalAmount >= 1000) {
            let producedBottles = Math.trunc(totalAmount / 1000);
            let leftQuantity = totalAmount % 1000;
            if (!bottles.has(juiceName)) {
                bottles.set(juiceName, 0);
            }
            let totalBottles = bottles.get(juiceName) + producedBottles;
            bottles.set(juiceName, totalBottles);
            juicesQuantity.set(juiceName, leftQuantity);
        } else {

            juicesQuantity.set(juiceName, totalAmount);
        }

    }

    console.log([...bottles]
        .map(([key, value])=> `${key} => ${value}`)
        .join('\n'));
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);