// Primitive Data Type Example e.g. number, string, Boolean
var number = 2;
var number2 = number;
number = 5;
console.log(number2); //2

// Reference Data Type Example e.g. Object, Array
var object = {
	name: "Irene"
}
var object2 = object;
object.name = "Salomo";
console.log(object2); //{name: "Salomo"}

// Since object is reference data type, we can use spread operator to copy its value to other variable 
var spreadObject = {...object};
console.log(spreadObject); //{name: "Salomo"}

object.name = "Mack Xu";
console.log(spreadObject) //{name: "Salomo"}