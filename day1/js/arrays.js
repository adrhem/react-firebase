let a = [];
let b = [[1,2],[3,4],[5,6]];

console.log(b);

a.push(1);
a.push("Hola");
a.push("2");
a.push("3");

console.log(a);
console.log("Size:", a.length);

a.forEach((val) => {
    console.log(val);
    val = 1;
});
console.log("After foreach", a);

a.pop();

console.log("After pop", a);

console.log("With for:");
for(let i = 0 ; i < a.length ; i++){
    console.log(a[i]);
}