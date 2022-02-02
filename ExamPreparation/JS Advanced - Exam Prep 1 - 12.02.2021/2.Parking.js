class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];

    }

    addCar(carModel, carNumber) {

        if (this.vehicles.length >= this.capacity) {

            throw new Error('Not enough parking space.');
        }

        let car = {

            carModel,
            carNumber,
            payed: false,
        };

        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {

        let surchedCar = this.findCar(carNumber);

        if (!surchedCar) {

            throw new Error("The car, you're looking for, is not found.");
        }

        if (!surchedCar.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }

        this.vehicles = this.vehicles.filter(x => x.carNumber !== surchedCar.carNumber);
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {

        let surchedCar = this.findCar(carNumber);
        if (!surchedCar) {

            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (surchedCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        surchedCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {

        let stringResult = '';
        if (!carNumber) {
            let emptySlots = this.capacity - this.vehicles.length;
            let sortedVehicles = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            let vehiclesResult = [];

            for (let index = 0; index < sortedVehicles.length; index++) {
                let currVehicle = sortedVehicles[index];
                vehiclesResult.push(this.carPayed(currVehicle));

            }

            stringResult = `The Parking Lot has ${emptySlots} empty spots left.\n${vehiclesResult.join('\n')}`;

            return stringResult;

        } else {
            let currVehicle = this.findCar(carNumber);
            let vehiclesResult = this.carPayed(currVehicle);

            return vehiclesResult;

        }
    }

    findCar(carNumber) {
        let surchedCar = this.vehicles.find(x => x.carNumber === carNumber);
        return surchedCar;
    }

    carPayed(car) {
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Volvo a40", "CA3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));

//console.log(parking.removeCar("a"));
console.log(parking.removeCar("TX3691CA"));
console.log(parking.getStatistics());

