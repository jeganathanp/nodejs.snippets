//Since we can assign function to variable
//we can also pass function to other function.
setTimeout(function(){
  console.log("This will print after 2 sec");
},2000);


//Create function foo and pass it another function.

function foo(){
  console.log("This will run after 2 secs from foo");
}

setTimeout(foo, 2000);
