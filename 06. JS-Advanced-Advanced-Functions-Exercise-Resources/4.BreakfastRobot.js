function solution() {

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2, order: ['carbohydrate', 'flavour'] },
        lemonade: { carbohydrate: 10, flavour: 20, order: ['carbohydrate', 'flavour'] },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, order: ['carbohydrate', 'fat', 'flavour'] },
        eggs: { protein: 10, fat: 1, flavour: 1, order: ['protein', 'fat', 'flavour'] },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, order: ['protein', 'carbohydrate', 'fat', 'flavour'] },
    };

    let storage = {
        carbohydrate: 0,
        protein: 0,
        fat: 0,
        flavour: 0,
    };

    function management(command) {
        let [commandName,type,quantity] = command.split(' ');

        if (commandName === 'restock') {
            storage[type] += Number(quantity);
            return 'Success';
        } else if (commandName === 'prepare') {
            return prepareFood();
        } else if (commandName === 'report') {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }
    }

    function prepareFood() {
        for (const ingrediant of recipes[type].order) {
            if (recipes[type][ingrediant] * quantity > storage[ingrediant]) {
                return `Error: not enough ${ingredient} in stock`                
            }
        }
        for (const ingrediant of recipes[type].order) {
            storage[ingrediant]-= (recipes[type][ingrediant] * quantity);
        }
        return 'Success';
    }

    return management;
}

let manager = solution (); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock protein 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("prepare turkey 1"));  
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("report"));








