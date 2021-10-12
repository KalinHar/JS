function result() {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }
    
    class Teacher extends Person {
        constructor (name, email, subject) {
            super (name, email);
            this.subject = subject;
        }
        toString() {
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`;
        }
    }
    class Student extends Person {
        constructor (name, email, course) {
            super (name, email);
            this.course = course;
        }
        toString() {
            return super.toString().slice(0, -1) + `, course: ${this.course})`;
        }
    }
    Person.prototype.toString = function () {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    };

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com');
console.log(p.toString());
let s = new Student("Tosho",'Tosho@pesh.com', 'JAVA');
console.log(s.toString());