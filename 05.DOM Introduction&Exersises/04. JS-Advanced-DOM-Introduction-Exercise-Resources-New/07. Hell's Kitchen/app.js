function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let inputElement = document.querySelector('#inputs textarea');
   let bestRestResultP = document.querySelector('#bestRestaurant p');
   let workersResultP = document.querySelector('#workers p');
   function onClick() {
      let arr = JSON.parse(inputElement.value);

      let restaurants = {};

      arr.forEach((line) => {
         const tokens = line.split(' - ');
         let name = tokens[0];
         let workersArr = tokens[1].split(', ');
         let workers = [];

         for (const worker of workersArr) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary });
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }
         workers.sort((a, b) => b.salary - a.salary);
         const bestSalary = workers[0].salary;
         const averageSalary = workers
            .reduce((acc, curr) => acc + curr.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }

      });

      let bestRestaurantSalary = 0;
      let best = undefined;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            best = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }

            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      bestRestResultP.textContent =
         `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

         let workersResult = [];

       best.workers.forEach(x => {
         workersResult.push(`Name: ${x.name} With Salary: ${x.salary}`);
      })
      workersResultP.textContent =workersResult.join(' ');
   }
}