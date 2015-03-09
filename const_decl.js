const my_fav = 7;

// this will fail silently in Firefox and Chrome (but does not fail in Safari)
 my_fav = 20;
//
// // will print 7
 console.log("my favorite number is: " + my_fav);
//
// // trying to redeclare a constant throws an error 
//const my_fav = 20;
//
// // the name my_fav is reserved for constant above, so this will also fail
//var my_fav = 20; 
//
// // my_fav is still 7
 console.log("my favorite number is " + my_fav);
//
// // Assigning to a const variable is a syntax error
 const a = 1; a = 2;
//
// // const requires an initializer
// const foo; // SyntaxError: missing = in const declaration
//
// // const also works on objects
 const myObject = {"key": "value"};
//
// // Overwriting the object fails as above (in Firefox and Chrome but not in Safari)
 myObject = {"otherKey": "value"};
//
// // However, object attributes are not protected,
// // so the following statement is executed without problems
 myObject.key = "otherValue";

console.log(myObject);
