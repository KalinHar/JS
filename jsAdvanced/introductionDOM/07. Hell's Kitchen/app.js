// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick() {
//       let arrRest = JSON.parse(document.querySelector('#inputs textarea').value);
//       let objWinner = findBestRestaurant(arrRest);
//       document.querySelector('#bestRestaurant p').textContent = getMsgRest(objWinner);
//       document.querySelector('#workers p').textContent = getMsgEmp(objWinner.workers);
//    }

//    function getMsgRest(objWinner) {
//       return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
//    }

//    function getMsgEmp(workers) {
//       return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
//    }

//    function findBestRestaurant(arr) {
//       let resultRestaurants = arr.reduce((acc, e) => {
//          let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
//          workers = workers.map(w => {
//             let [worker, salary] = w.split(' ');
//             return {
//                worker: worker,
//                salary: +salary
//             };
//          });
//          let foundRestraunt = acc.find(r => r.name === restaurant);
//          if (foundRestraunt) {
//             foundRestraunt.workers = foundRestraunt.workers.concat(workers);
//          } else {
//             acc.push({
//                name: restaurant,
//                workers: workers
//             });
//          }
//          return acc;
//       }, []);

//       resultRestaurants.forEach((el, idx) => {
//          el.inputOrder = idx;
//          el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
//          el.maxSalary = Math.max(...el.workers.map(w => w.salary));
//       });

//       resultRestaurants.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
//       let bestRestaurant = resultRestaurants[0];
//       bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

//       return bestRestaurant;
//    }
// }


function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurants = document.getElementsByTagName('textarea')[0].value;
      restaurants = JSON.parse(restaurants);
      let rests = {};
      let bestRestName;
      let bestRestAvrgSal = 0;
      let bestRestBestSal;
      let bestRestWorks;

      for (let rest of restaurants) {
         let [name, works] = rest.split(' - ');
         if (rests[name] == undefined) {
            rests[name] = works.split(', ').map(el => el.split(' '));
         } else {
            rests[name] = rests[name].concat(works.split(', ').map(el => el.split(' ')));
            let result = {};
            for (let element of rests[name]) {
               result[element[0]] = element[1];
            }
            rests[name] = Object.entries(result);
         }
      }

      for (let r in rests) {
         let salaries = rests[r].map(w => Number(w[1]));
         let avrgSals = salaries.reduce((a, b) => a + b, 0) / salaries.length;
         if (bestRestAvrgSal < avrgSals) {
            bestRestName = r;
            bestRestAvrgSal = avrgSals;
            bestRestBestSal = Math.max(...salaries);
            bestRestWorks = rests[r].sort((a, b) => b[1] - a[1]);
         } 
      }

      const resultBestRest = `Name: ${bestRestName} Average Salary: ${bestRestAvrgSal.toFixed(2)} Best Salary: ${bestRestBestSal.toFixed(2)}`
      let resultBestWorkers = '';
      for (let w of bestRestWorks) {
         resultBestWorkers += `Name: ${w[0]} With Salary: ${w[1]} `;
      }

      document.querySelector('#bestRestaurant p').textContent = resultBestRest;
      document.querySelector('#workers p').textContent = resultBestWorkers;
   }
}
