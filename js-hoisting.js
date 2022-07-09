//--- variable hoisting

console.log(x) // output - undefined
y = 3;
console.log(y) // output - 3
var x = 7;
var y;

//--- function hoisting

xyz();  // output - xyz is calling...
console.log(xyz)  // output - function xyz(){...} defined
function xyz(){
    console.log("xyz is calling...");
}
console.log(xyz); // output - function xyz(){...} defined

//--- variable defined arrow function hoisting

console.log(arrowFn) // output - undefined
var arrowFn = ()=>{
    console.log("arrowFn is calling ...")
}
console.log(arrowFn) // output - function ()=>{...} defined

// js hoisting, it create global space as execution context on call stack
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
/* Hoisting is JavaScript's default behavior of moving all declarations to
 the top of the current scope (to the top of the current script or the current function).*/