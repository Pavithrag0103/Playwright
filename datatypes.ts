/*

->Build in data types 
1. Number
2. void
3. string
4. null
5. boolean


user defined data types
1. array 
2.class
3.touple
4.enum
5.interface
6.functions


// NUMBER

var f:number=12.0;   // decimal
var s:number=0*3722;  // extra decial
var t:number=0o3722;    //integer
var fu:number=0b111001; //binary

console.log(f)
console.log(s)

console.log(t)
console.log(fu)
*/

//STRING

var name:string="Pavithra";
var dept:string="IT";

console.log(name);
console.log(dept);

var stmt:string=name + " workes in "+ dept;
console.log(stmt)


//BOOLEAN

var b:boolean=true;
console.log(b);

//Void type (undefined or null)

function hello():void
{
    console.log("This is welcome");

}

var num1:number=null;
num1=10;
console.log(num1)

//undefined

var num2:number=undefined;
num2=10;
console.log(num2);


//Any ype


var val:any ="hi";

val=100;
console.log(val);

function  my function(100)
