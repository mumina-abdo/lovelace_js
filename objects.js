const cup = {
    color: 'red',
    size: 'small',
    shape: 'cylindrical',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },
    design: ['floral','polka','checked'],
    drink: function(){
        console.log('Use me to drink tea');
        console.log(`My main ue is to drink ${this.functionality.drinkType}`)
    }
    
};
console.log('size',cup.size);
console.log({design :cup.design[0]});
console.log('shape', cup['shape']);
console.log('drinkType',cup.functionality.drinkType);
cup.drink();


cup.color = 'green';

delete cup.color;
console.log({cup});

const values = Object.values(cup);
console.log({values});

const key = Object.keys(cup);
console.log({keys});

Object.keys(cup).forEach(item =>{
    console.log({key:item, value : cup[item]});
})


