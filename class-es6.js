class Human {
    constructor(gender) {
        this.gender = gender;
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person3 extends Human{
	constructor(myName){
        super("female");
		this.name = myName;
    }
	printMyName(){
		console.log(this.name);
    }
}
const irene = new Person3("irene");
myself.printMyName();
myself.printGender();