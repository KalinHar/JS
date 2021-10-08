// const {Person} = require('./Person');

function getPerson() {
    const result = [];
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    let input = [['Anna', 'Simpson', 22,'anna@yahoo.com'], 
                ['SoftUni'], 
                ['Stephan', 'Johnson', 25], 
                ['Gabriel',	'Peterson',	24,	'g.p@gmail.com']];

    for (let p of input) {
        result.push(new Person(...p));
    }
    return result
}

console.log(getPerson()[2]);