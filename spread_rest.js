// Spread is used to combine and flatten array/object elements
var person = {
    age : 23
};

var me = {...person, 
    name : "irene"}

console.log(me);
// {age: 23, name: "irene"}

var number = [1, 2, 3];
var newNumberWithoutSpread = [number, 5]; //[[1, 2, 3], 5]
var newNumberWithSpread = [...number, 5]; //[1, 2, 3, 5]


// Rest is used to combine function argument into an array, so we can used existing array methods

// Without arrow function
// Alternative 1
function filter(...args){
    return args.filter(function(element){
        return element === 1;
    });
}

// Alternative 2
function filter(...args){
    return args.filter(element => element === 1);
}

// With arrow function
var filter = (...args) => args.filter(element => element === 1);

filter(2, 5, 1, 4);
