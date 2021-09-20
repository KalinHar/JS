function city(name, population, treasury) {
    const result = {
        name: name,
        popupation: population,
        treasury: treasury 
    };
    return result;
}

console.log(city("ruse", 15000, 100))
town = city("ruse", 150000, 100)

const myPerson = {
    name: 'Peter',
    'last name': 'Lakson',
    age: 23,
    town: {
        townName: "Secuio",
        popupation: 100000,
        treasury: 100
    }
};

myPerson.age; // 23;
myPerson['age'] = 24; // 24
const propName = 'name';
console.log(myPerson[propName]);
myPerson['last name'] = 'Jackson';
myPerson.nationality = 'UK';
console.log(myPerson);
delete(myPerson.age);
console.log(myPerson.town.townName);

const keys = Object.keys(myPerson);
const values = Object.values(myPerson);
const entries = Object.entries(myPerson);
console.log(values);
