class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {

        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }
    shopping(product) {

        let [productType, price] = product;
        if (this._budget < Number(price)) {
            throw new Error('Not enough money to buy this product');
        }
        this._budget -= price;
        this.products.push(productType);
        return `You have successfully bought ${productType}!`;

    }
    recipes(recipe) {

        let IsPresent = true;
        let {recipeName, productsList} = recipe;

        productsList.forEach(x => {

            if (!this.products.includes(x)) {
                IsPresent = false;
            }
        });

        if (IsPresent) {
            this.dishes.push({recipeName, productsList});  
            return `${recipeName} has been successfully cooked!`;
        }

        throw new Error("We do not have this product");
 
    }

    inviteGuests(name, dish) {
        if (!this.dishes.some(x => x.recipeName === dish)) {
            throw new Error("We do not have this dish");
        }
        let guests = Object.keys(this.guests);
        if (guests.some(x => x.guestName === name)) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`

    }
    showAttendance() {

        let output = '';
        let products = [];
        let guests = Object.keys(this.guests);
        guests.forEach(name => {

            let dish = this.guests[name];

            this.dishes.forEach(x => {
                if (x.recipeName === dish) {
                    products = x.productsList;
                }
            });

            output += `${name} will eat ${dish}, which consists of ${products.join(', ')}\n`;
        });
       
        return output.trim();
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
