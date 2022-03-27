                                                         /*How JS Works?
                                               JS is synchronous , single threaded Language/*

/* Java script kse chlti hai?
Top to bottom - > Left to right
*/

/*console.log("Hello")
console.log("Hi")*/
// phle hello print hoga then hi - > means ? Top To bottom
// ---------------------------------------------------------------------------------------------------------------------------------------------
/*let a="hello arsh"
console.log(a)*/
// ---------------------------------------------------------------------------------------------------------------------------------------------
/*console.log(b)                                            
let b="hello arsh" */                              // let variable
// error aayega
// ---------------------------------------------------------------------------------------------------------------------------------------------

/*console.log(c)                                            
var c="hello arsh" */                              // var variable
// file run hogyi
// aayega undefined 
// ---------------------------------------------------------------------------------------------------------------------------------------------
 
/*console.log(d)  // undefined            
var d="hello arsh"                                                    // var 
console.log(d)  // hello arsh*/

// --------------------------------------------------------------------------------------------------------------------------------------------
/*console.log(d)  // undefined            
let d="hello arsh"                                                   // let 
console.log(d)  // hello arsh

// error aayega
// --------------------------------------------------------------------------------------------------------------------------------------------
                                                    


                                                         /*memory allocates first then execution happens*/
                
                                                         
/*var a=10;
function fun()                                                         
{
    var b=20;
    console.log(b) 
}
console.log(a) // 10
var c =20;
fun(); // 20
/* sbse phle memory allocate hogi - >
.......................................................GLOBAL EXECUTION CONTEXT [GEC]..............................................
MEMORY 
a : undefined // abhi k liye 
fun: as it is pura function ajega [addres hota hai basically - > reference store hojati hai]
c: undefined // abhi k liye

code dekhega phli line a ki value 10 kr dega 
c ki bhi change krega 
function ko call kiya hai..............

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                      

CODE 
var a=10;
function......
var c=20
fun()

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

HEAP
function k andr ka sara
*/


// ------------------------------------------------------------------------------------------------------------------------------------
/*console.log(a) // undefined 
var a=10;
console.log(a) // 10

function fun(){
    var b=20;
    return b;
}

console.log(c) // undefined 
var c=20;

var d=fun();
console.log(d)*/           // 20
// -------------------------------------------------------------------------------------------------------
                                                                                                          // VERY IMPORTANT
      
                                                                                         /*memory allocates first then execution happens*/


                                                                                          
fun()                        // fun is not a function         // undefined  // error aayega

var fun=function(){
    console.log("hello")
}
fun()                         // hello