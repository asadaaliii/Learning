function exampleFunction() {
  if (true) {
    // var functionScopedVar = "I am function-scoped";   //function level scope
    let functionScopedVar = "I am function-scoped"; //only block level scope
  }
  console.log(functionScopedVar);
}
exampleFunction();
console.log(functionScopedVar);
// const is same as let
