let a = 20;
let b = 30;

let add = a + b;
console.log({add});


let subtract = a - b;
console.log({subtract});


let c = "20";

let looselyEqualTo = a == c;
console.log({looselyEqualTo});
let strictlyEqualTo = a === c;
console.log({strictlyEqualTo});

let notEqualTo = a != c;
console.log({notEqualTo});

let strictlyNotEqualTo = a !== c;
console.log({strictlyNotEqualTo});

let increment = a++;
console.log({increment});

a++;
console.log('increment', a);

b--;
console.log("decrement", b);

let compound = a += b;
console.log({compound});

console.log('b',typeof b);

//implicit coercion
let d = a * c;
console.log({d});
console.log('d-type',typeof d);

//Explicit coercion
console.log({c});
let e = Number(c);
console.log({e});




