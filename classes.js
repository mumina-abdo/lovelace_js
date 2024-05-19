class person{
    constructor(name, age){
        this.name;
        this.age;

    }
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);

    }
};

const jane = new person('Jane',30);
console.log({jane});
jane.greet();
console.log('prototype', person.prototype);


person.prototype.nationality = 'kenyan';
console.log('nationality', jane.nationality);


// Inheritance
class student extends person{
    constructor(name,age) {
        super(name, age);
        this.school = this.school;


    }

    profession(){
        console.log(`I am a student at ${this.school}`);
    }
};

const amanda = new student('Amanda', 19, 'AkiraChix');

console.log({amanda});
console.log('nationality', amanda.nationality);
amanda.greet();


class Students {
    constructor(name,score){
        this.name = name;
        this.score = score
    }


}

