//example 1
function c1(arg){
  var outerFunctionVal = arg;
  var printVal = function(){
    console.log("accessing inner values");
    console.log(arg);
  };
  printVal();
}

c1("Welcome Clousures!!!");
