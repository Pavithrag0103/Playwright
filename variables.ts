import { features, sourceMapsEnabled } from "process";

// hello.ts
let message: string = "Hello,world !";
console.log(message);
/*


Day 1
-> Typescriot - statical program language
-> Features - used in cross platform , oops , DOM manipulation , ES 6 features
-> open source


Day - 2

*/

// variables declared using -- var , let and const 

/*

1. Both type and initial value
2. only the type
3. only the initial value
4. Without type and initial value



var employee:string='Pavithra';    
console.log(employee)

var employee:string;    //type
employee='john';   //initialize
console.log(employee)




-> Variable decalred using "var" use inside the function

var y=50;  //global variable
function fun1()   
{
    if(true)
        { 
            var x=100;
            console.log(x);
    }
    console.log(x);   // not okay
}

// console.log(x); //error - > x should use inside the function
console.log(y);    // - global


var we can use inside the function
let we can use within the block





let y=50;  //global variable
function fun1()   
{
    if(true)
        { 
            let x=100;
            console.log(x);
    }
    console.log(x);   // not okay outside the block
}

// console.log(x); //error - > x should use inside the block
console.log(y); 



redefine


var x=100;
console.log(x);

var x:string="name"; // we can redefine the same 
console.log(x);


let y=100; //already declared
let y=12;
console.log(y)
*/
const x=100;
console.log(x)


