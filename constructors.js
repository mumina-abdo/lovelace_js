function person (name, age){
    this.name - name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, My name is ${this.name} and I am ${this.age} years old`);

    }

};
const adam = new person('adam', 30);
console.log({adam});
adam.greet();


const eve = new person('Eve', 25);
console.log({eve});
eve.children = ('Cain','Abel','Seth');
console.log({eve});
console.log({adam});

console.log('prototype', person.prototype);


