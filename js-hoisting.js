xyz(); // function hoisting

console.log(x) // js variable hoisting
console.log(xyz) // function hoisting

var x = 7;

function xyz(){
    console.log("xyz is calling...");
}
console.log(xyz)

// js hoisting, it create global space as execution context on call stack
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
/* Hoisting is JavaScript's default behavior of moving all declarations to
 the top of the current scope (to the top of the current script or the current function).*/