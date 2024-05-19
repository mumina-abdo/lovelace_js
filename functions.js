function add (num1, num2){
    const sum = num1 + num2;
    console.log({console:sum});
    return {'return': sum};
}

console.log(add(2,3));
add(4,5);

// function expression
const subtraction = function (num1, num2){
    console.log(num1 - num2);
    
}
subtraction(20,10)

// Arrow functions
const multiply = (num1, num2) => console.log(num1 * num2);
multiply(5, 6)

// IIFEs
(function(num1){
    console.log({num1});
    console.log('hello')
})(50);

// Hosting  only works with var not let and const
console.log({greet});

var greet = 'Hello there';
console.log({greet2:greet});