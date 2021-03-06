function solution() {

    class Employee {
        constructor(name, age, tasks) {

            if (this.constructor === Employee) {
                throw new Error('Cannot initialize abstract class')
            }
            this.name = name;
            this.age = age;
            this.tasks = tasks;
            this.salary = 0;
            //this._currentTask = 0;
        }

        // work() {
        //     //много хитро превъртане с помоща на % this.tasks.length
        //     let task = this.tasks[this._currentTask].replace('{name}', this.name);
        //     this._currentTask = (this._currentTask +1) % this.tasks.length;
        //     console.log(task);
        // } - това за да заработи трябва в начакото на всеки таск да сложа {name} (ц мутиране е малко по-бавно, но това не е толкова важно)

        //work() с мутиране на масива - за мен е по-разбираемо, по-четимо 
        work() {
            let currentTask = this.tasks.shift();
            console.log(`${this.name}${currentTask}`);
            this.tasks.push(currentTask);
        }

        _calculateSalary() {
            return this.salary;
        }

        collectSalary() {

            console.log(`${this.name} received ${this._calculateSalary()} this month.`); 
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age, [` is working on a simple task`]);
        }

    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age, [` is working on a simple task`,
            ` is taking time off work.`,
            ` is supervising junior workers.`]);
        }

    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age, [` scheduled a meeting.`,
            ` is preparing a quarterly report.`]);

            this.dividend = 0;
        }

        _calculateSalary() {
            return this.salary + this.dividend;
        }

    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }

}


const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
