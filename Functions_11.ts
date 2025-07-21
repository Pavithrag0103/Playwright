/*

Functions

- Code reusability , less coding , Easy to debug 


 NAMED FUNCTIONS -> Decalre using name and call the function
ANONYMOUS FUN -> No name call using the variable





function display()
{
console.log("welcome")
}
display()





function sum(x:number,y:number):number
{
    return x+y;
}

console.log(sum(100,200)); //300



//Anonyms fun

var greeting=function()
 {
    console.log("welcome");
}

greeting();



var add=function(x:number,y:string)
{
    return [x,y];
}

console.log(add(10,"name"))




 // Optional and default parameters

function Greet(greeting:string,name:string):string
{
    return greeting+ "    "+name;
}

console.log(Greet("welcome","Pavi")) // if i give one one complier error will occur


//default parameters

function Greet(name:string,greeting:string="hello"):string
{
    return greeting+ "    "+name;
}

console.log(Greet("Pavi"))
console.log(Greet("welcome","Pavi")) 


//Arrow function  (called lambda in other language)

var sum=(x:number,y:number):number=>
{
    return x+y;
}

console.log(sum(20,30));




var Print=() =>
{
    console.log("welcome");

}
Print()


var Price=()=> console.log("welcome");
Price()

// function contain only one statement . no need for curly brackets and return keyword

var sum=(x:number,y:number)=> x+y;
console.log(sum(1,2))


// FUNCTION OVERLOADING

-> Function same name with diff sets of parameters




function add(a:number,b:number):number;
function add(a:string,b:string):string;

function add(a:any,b:any):any
{
    return a+b;
}

console.log(add(10,20))
console.log(add("wel","come"))

//Fun overloaded with types of same name not supported




function dis(a:string,b:string):void //void (return type)
{
    console.log(a+b);
}


function dis(a:string):void  //void (return type)
{
    console.log(a+b);
}

//Rest parameters

    -> number of parameters FUNCTION RECEIVE NOT KNOWN
    -> DENOTE BYB ...(ELLIPSIS)

*/

function greet(g:string,...name:string[]):string
{
    return g+ " "+name

}
console.log(greet("hello","john"))

console.log(greet("hello","john","welcome"))

console.log(greet("hello","john","welcome","team"))



