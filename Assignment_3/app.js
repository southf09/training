//Array.map() prototype

const arr = [1,2,3,4];

Array.prototype.ourMap = function(cb){
    for(let i = 0; i < this.length; i++){
        cb(this[i],i);
    }
};

arr.ourMap((e,i) => {
    console.log(`The square of ${e} is ${e*e}, found at index ${i}.`);
});

//Array.reduce() prototype

// Array.reduce()

const nums = ['4', '3', '3', '7', '9', '5', '6'];

Array.prototype.ourReduce = function(cb){
    for(let i = 0; i< animals.length; i++ ){
        cb(this[i], i);
    }
};

nums.ourReduce((e,i) => {
    return e + i;
});

console.log(total);
// console.log(value);

//Array.filter() prototype

const animals = ['Tiger', 'Rhino', 'Dog', 'Bear', 'Monkey', 'Giraffe', 'Ape', 'Zebra'];

Array.prototype.ourFilter = function(cb){
    for(let i = 0; i < animals.length; i++){
        cb(this[i],i);
    }
};

animals.ourFilter((e,i) => {
    if(e.length >= 5){
        console.log(e,i);
    } else {
        console.log('Name is too short')
    }
});