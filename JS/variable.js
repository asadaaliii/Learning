function exampleFunction() {
  if (true) {
    var functionScopedVar = "I am function-scoped"; //function level scope
    let blockScoped = "I am block-scoped"; //only block level scope
    const blockScopedConst = "I am constant and block scope";
  }
  console.log(functionScopedVar);
  console.log(blockScoped);
  console.log(blockScopedConst);
}
exampleFunction();
