//Array.map() prototype

const arr = [1,2,3,4];

Array.prototype.ourMap = function(cb){
    const mapArr = [];
    for(let i = 0; i < this.length; i++){
        mapArr.push(cb(this[i],i));
    }
    return mapArr;
};

const squared = arr.ourMap(e => (e*e));
console.log(squared);



//Array.filter() prototype

const animals = ['Tiger', 'Rhino', 'Dog', 'Bear', 'Monkey', 'Giraffe', 'Ape', 'Zebra'];

Array.prototype.ourFilter = function(cb){
    const filterArr = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            filterArr.push(this[i]);
        }
    }
    return filterArr; 
};

const filtered = animals.ourFilter(animal => animal.length >=5);
console.log(filtered);



//Array.reduce() prototype

const nums = [4, 3, 3, 7, 9, 5, 6];

Array.prototype.ourReduce = function(cb){
    let total = 0;
    for(let i = 0; i < this.length; i++ ){
        total = cb(total, this[i]);
    }
    return total;
};

const summed = nums.ourReduce((prev,init) => prev + init);
console.log(summed);