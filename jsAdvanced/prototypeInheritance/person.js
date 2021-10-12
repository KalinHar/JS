function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName: ''
    };

    Object.defineProperty(result, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value) {
            const [first, last] = value.split(' ');
            if (first && last) {
            this.firstName = first;
            this.lastName = last;
            }
        },
        enumerable: true,
        configurable: true
    });
    return result;
}
per = createPerson('ivan', 'ivanov');
console.log(per.fullName)

// class Person {
//     constructor(name, lastName) {
//         this._firstName = name;
//         this._lastName = lastName;
//         this._fullName = name + ' ' + lastName;
//     }
//     get firstName() {
//         return this._firstName;
//     }
//     set firstName(val) {
//         this._firstName = val;
//         this.fullName = val + ' ' + this.lastName
//     }
//     get lastName() {
//         return this._lastName;
//     }
//     set lastName(val) {
//         this._lastName = val;
//         this.fullName = this.firstName + ' ' + val
//     }
//     get fullName() {
//         return this._fullName;
//     }
//     set fullName(val) {
//         try {
//             let [n, ln] = val.split(' ');
//             this._fullName = val;
//             this._firstName = n;
//             this._lastName = ln
//         }catch (err) {}
//     }

// }


