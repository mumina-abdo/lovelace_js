const intership = false;
const ourPromise = new Promise((resolve, reject)=>{
    if(intership){
        resolve('I made it');
    }else{
        reject('Pray for me')
    }
})

ourPromise.then(()=>{
    console.log('I will be confirmed')

}).catch(()=>{
    console.log('I will continue applying for jobs')

}).finally(()=>{
    console.log('I will still be successful')
});


console.log({ourPromise});


const successWish = async ()=>{

    await ourPromise;
    console.log('My successful wish')
}

successWish();