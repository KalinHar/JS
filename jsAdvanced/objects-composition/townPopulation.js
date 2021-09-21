function cownPopulation(arr) {
    const cities = {};
    for (let [town, pop] of arr.map((t) => t.split(' <-> '))) {
        pop = Number(pop);
        if (cities[town] != undefined) { pop += cities[town]; }
        cities[town] = pop;
    }
    for (let city in cities) {
        console.log(`${city} : ${cities[city]}`);
    }
}

console.log(city(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
))

console.log(city(['Sofia <-> 1200000',
    'Montana <-()> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
))
