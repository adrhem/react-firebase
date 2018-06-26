class MyClass{
    constructor(param1 = "1"){
        this.param1 = param1; // Attribute
    }

    sayHello(){
        console.log(this.param1);
    }
}

let obj = new MyClass("Course ES6");
let obj2 = new MyClass();
obj.sayHello();
obj2.sayHello();

console.log(obj);