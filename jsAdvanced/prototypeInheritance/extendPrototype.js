class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    // toString()  {   ????
    //     return this;
    // }
}


function extendProrotype(Class) {
    Class.prototype.species = 'Human';
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}` 
    }

}


extendProrotype(Person);
let p = new Person('fr', 'eml');
console.log(p.species);
console.log(p.toSpeciesString());