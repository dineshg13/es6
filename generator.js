function* argumentsGenerator() {
      for (let i = 0; i < arguments.length; i += 1) {
              yield arguments[i];
                }
}
var argumentsIterator = argumentsGenerator('a', 'b', 'c');


for(let value of argumentsIterator){
    console.log(value);
}
