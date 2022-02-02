function solve() {
    let resultArr = [];

    class Person {

        constructor(firstName, lastName, age, email) {

            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        static sayHello() {
            console.log(`Hello`);
        }
        
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }

    }
    resultArr.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    resultArr.push(new Person('SoftUni'));
    resultArr.push(new Person('Stephan', 'Joihnson', 25));
    resultArr.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));



    return resultArr;
}