function Human(name, age, isHandsome){
    this.name = name;
    this.age = age;
    this.isHandsome = isHandsome;
}

Human.prototype.sayHello = function(){
    console.log("Hello");
}


let h1 = new Human("Harsh", 26, true);


function Employee(name, age, id, salary){
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.printdetails = function(){
    console.log(`${this.name} is my name and I'm ${this.age} years old and my ID is ${this.id} and my salary is ${this.salary}`);
}

let e1 = new Employee("Harsh", 26, 1234, 50000);