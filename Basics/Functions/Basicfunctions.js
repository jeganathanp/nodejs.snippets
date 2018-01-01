/**
* All the functions return values in Javascript.
* If there is no return type then function returns "Undefined"
*/

function boo(){
  //return nothing
}

console.log("Function without return type")
console.log(boo())

//function with return type
function foo(){
  var a =1;
  return a;
}

console.log("Function with return type");
console.log(foo());



//Immediate executing functions
//Falvour 1: without function name
(function(){
  console.log("Inside Immediate returning function");
})();
//Falvour 2: with function name
(function foo(){
  console.log("Inside Immediate returning function with name foo");
})();
