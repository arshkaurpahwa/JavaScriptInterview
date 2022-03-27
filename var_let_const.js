                                                                                                       // hoisting
/*console.log(a)
var a=10;*/
                                                            // kisi cheez ko declare hone se phle access kr sko usko hoisting khte hai
// ----------------------------------------------------------------------------------------------------------------------------------------


/*console.log(a)
var a;
a=10;
console.log(a)
a=20 // reinitialize
console.log(a)

var a=50; // redeclare
console.log(a)
*/
// ------------------------------------------------------------------------------------------------------------------------------------------


//console.log(a)                              // hoisting bhi ni kr skte       // error
/*let a;
a=10;    // reinitialize kr skte hai
console.log(a)

a=20;
console.log(a)
/*let a=40                               // redeclare nhi kr skte let variable ko
console.log(a)*/


// ----------------------------------------------------------------------------------------------------------------------------------


//const a;                                           // declare k sath usko initialize bhi krna pdega
// console.log(a)                                          // can not hoist
const a=20;
// a=10;                                                            // reinialize nhi kr skte 

//const a=35;                                               // redeclare nhi kr skte
console.log(a)


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


/*
          redeclare       reinitialize    hoisting                                   scope

var        yes             yes               yes
let        no              yes               TDZ [temprarily dead zone]
const      no                no              TDZ
*/
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx