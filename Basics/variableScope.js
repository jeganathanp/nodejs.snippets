//This function defines scope of the variable.

var a =1;
//if,else and while doesn't define scope of variable.
if(true){
  var a =2;
}
console.log("Checking scope after IF");
console.log(a);

(function(){
  var a =3;
  console.log("scope of variable inside function");
  console.log(a);
})();

console.log("scope of variable after function");
console.log(a);
