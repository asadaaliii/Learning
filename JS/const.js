function exampleFunction() {
  if (true) {
    const functionScopedVar = "I am function-scoped"; //only block level scope and constant
    console.log(functionScopedVar);
  }
  console.log(functionScopedVar);
}
exampleFunction();
console.log(functionScopedVar);
// const is same as let
