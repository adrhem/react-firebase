function say_hello(a, b = "Not defined", c){
    c = c || "Not defined C";

    console.log("Hello1 " + a);
    console.log(`Hello2 ${a}`); // ES6
    console.log("B:", b);
    console.log("C:", c);
}

function example_this(){
    console.log(this);

    function f2(){
        console.log("F2", this);
    }
    
    f2();

    let f3 = () => {
        console.log(this);
    }

    f3();
}

let example_arrow = () => {
    console.log(this);
}

//say_hello("Course");
example_this();