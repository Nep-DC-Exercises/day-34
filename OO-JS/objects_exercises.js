// https://app.schoology.com/assignment/2271041775/info

// Given the following objects
// var mom = {
//     firstName: 'Alice',
//     lastName: 'Wong',
//     eyeColor: 'brown',
//     hairColor: 'black'
// };


// var daughter = {
//     firstName: 'Ilene',
//     hairColor: 'brown',
// }; 

class Mom {
    constructor(firstName, lastName, eyeColor, hairColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
    
    // Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daughter.
    showInfo() {
        console.log( this.firstName, this.lastName, this.eyeColor, this.hairColor )
    }
}

// write code to make daughter inherit properties from mom
class Child extends Mom {
    constructor(firstName, hairColor, age, lastName, eyeColor) {
        super(lastName, eyeColor);
        this.firstName = firstName;
        this.lastName = mom.lastName;
        this.eyeColor = mom.eyeColor;
        this.hairColor = hairColor;
        this.age = age;
    }
}

// Testing results
const mom = new Mom("Alice", "Wong", "brown", "black");
const daughter = new Child("Ilene", "brown", 14);

console.log("mom is: ", mom);
console.log("daughter is: ", daughter);
mom.showInfo();
daughter.showInfo();
