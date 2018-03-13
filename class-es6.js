class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person3 extends Human{
    gender = "female";
    name = "Irene";
    
    printMyName = () => {
		console.log(this.name);
    }
}
const myself = new Person3();
myself.printMyName();
myself.printGender();