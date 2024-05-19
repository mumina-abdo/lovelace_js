let fruits = ['mango','Apple','Banana','orange'];


let array = new Array(20,30,6,7);

console.log({fruits});
console.log({array})

fruits[1]= 3;
console.log({fruits});
console.log('length',fruits.length);
console.log(fruits[20]);

let addLast = fruits.push('Kiwi');
console.log({fruits});
let addFirst = fruits.unshift('pawpaw');
console.log({fruits});
let removeLast = fruits.pop();
console.log({fruits});


let removeFirst = fruits.shift();
console.log({fruits});

let items = [20,30,40,50,60];

let add = items.reduce((acc,curr)=>acc + curr);
console.log({add});

 let multiply = items.map(items => item * 2);
 console.log({multiply});


let addEach = items.forEach(item => {
    const add = item + 2 ;
    console.log({add});

});



let multiplyAll = 1;
items.map(item => {
 multiplyAll *= item;
return item 
})

console.log({multiplyAll});

// Destructuring
let [num1,num2, num3] = items;
console.log({num1});
console.log({num2});
console.log({num3});








