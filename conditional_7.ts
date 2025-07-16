


/*
Conditional StatementSync
  - if
  - if else
  - else if
  - Ternary operator
  - switch


var person_age:number=20;
if (person_age>18)
{
    console.log("eligible for vote");
}
else
{
    console.log("not eligible for vote");
}


var num:number=30;
if(num%2==0)
{
    console.log("even");
}
else
{
    console.log("odd");
}


//2
var a:number=10;
var b:number=20;
var c:number=30;

if (a>b && a>c)
{
    
    console.log("a is largest");
}
else if (b>a && b>c)
{
    console.log("b is largest");
}
else
{
    console.log("c is largest");
}


//ternary operator

var x:number=100;
var y:number=200;

//syn: expression ? statement1:statement2;

x>y?console.log("x is largest"):console.log("y is greater")

*/


//nested if else

var weekno:number=1;
if (weekno==1)
{
    console.log("sunday");
}
else if (weekno==2)
{
    console.log("monday");
}
else if (weekno=3)
{
    console.log("Tuesday");
}


//switch

var weekno:number=2;

switch (weekno)
{
case 1:console.log("sunday");break; //single line
case 2:console.log("monday");break;
case 3:
    console.log("Tuesday")
    break
}