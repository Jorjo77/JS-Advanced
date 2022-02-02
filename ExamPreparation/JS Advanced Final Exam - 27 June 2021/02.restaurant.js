class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {

        for (const element of products) {

            let IsAdded = false;
            let product = {
                productName: element.split(' ')[0],
                productQuantity: Number(element.split(' ')[1]),
                productTotalPrice: Number(element.split(' ')[2]),
            }

            if (product.productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= product.productTotalPrice;

                if (!this.stockProducts[product.productName]) {
                    this.stockProducts[product.productName] = product.productQuantity;

                    IsAdded = true;
                    this.history.push(`Successfully loaded ${product.productQuantity} ${product.productName}`);

                } else {

                    this.stockProducts[product.productName] += product.productQuantity;
                    IsAdded = true;
                    this.history.push(`Successfully loaded ${product.productQuantity} ${product.productName}`);
                }

            }

            if (IsAdded === false) {
                this.history.push(`There was not enough money to load ${product.productQuantity} ${product.productName}`);
            }

        }

        return this.history.join('\n');
    }

    addToMenu(mealN, neededProducts, price) {

        let meal = {
            mealName: mealN,
            products: [],
            price: price,
        }


        for (const item of neededProducts) {
            let product = {
                productName: item.split(' ')[0],
                productQuantity: item.split(' ')[1],
            }

            meal.products.push(product);
        }


        if (!this.menu[meal.mealName]) {
            this.menu[meal.mealName] = meal;
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }


        let menuCount = Object.keys(this.menu).length;
        if (menuCount === 1) {
            return `Great idea! Now with the ${mealN} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${mealN} we have ${menuCount} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {

        let menuCount = Object.keys(this.menu).length;
        if (menuCount === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            let result = '';

            for (const key in this.menu) {

                result += `${this.menu[key].mealName} - $ ${this.menu[key].price}\n`;
            }
            return result.trimEnd();
        }

    }

    makeTheOrder(mealName) {

        let meal = this.menu[mealName]
        if (meal === undefined) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`
        } else {

            let price = meal.price;
            let neddedProducts = meal.products;
            let IsHaveAllProducts = true;
            for (const product of neddedProducts) {
                let name = product.productName;
                let quantity = product.productQuantity;
                if (this.stockProducts[name] === undefined) {
                    IsHaveAllProducts = false;
                    return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
                } else {
                    if (this.stockProducts[name] >= quantity) {
                        this.stockProducts[name] -= quantity;
                        this.budgetMoney += price;
                    } else {
                        IsHaveAllProducts = false;
                        return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
                    }

                }

            }

            return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${price}.`
        }

    }

}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log(kitchen.showTheMenu());
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


