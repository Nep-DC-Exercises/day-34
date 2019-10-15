// In class code walkthrough

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static describe(person) {
        return `${person.name}, ${person.age} years old.`;
    }

    greet(msg) {
        return `Hello, I am ${this.name}. I am ${this.age} years old. This conversation is ${msg}...`
    }
}

const me = new Person("Nep", 26);
const jason = new Person("Jason", 45);

console.log(Person.describe(me));
console.log(Person.describe(jason))
console.log(jason.greet('hotlanta'));
console.log(me.greet('cold like ice'))