/*
ARRAY

- Specual type of value (store multiple values or diff data types)
-> Single and two dimensional 



var fruits:string[]=["apple","banana","mango"];
console.log(fruits)

var fruits2:Array<string>;  //declaration
fruits2=["apple","banana","mango"];  //initialization

console.log(fruits2);

// Multi type array

var values:(string | number) []=["apple",3,"mango",2,5,4];
console.log(values)
var values:Array<string | number>=["apple","banana","mango",10];
console.log(values)

//Access array elements

var fruits:string[]=["apple","banana","mango"];

for (var i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}





//2D Array
var myarray:number[][]=[[10,20],[20,30],[50,45]]
console.log(myarray);

//multi type array
var myarray2:(string | number)[][]= [[1,3,"bee"],[1,"pavi"]]
console.log(myarray2);

// Access 2D Array elements

console.log(myarray2[0][2]);
console.log(myarray2[1][0]);






// loop to access array elements


var myarr2:(string | number)[][]= [[1,3,"bee"],[1,"pavi"]]

console.log(myarr2)

for (var i=0;i<myarr2.length;i++)
{
    for(var j=0;j<myarr2[i].length;j++)
    {
        console.log(myarr2[i][j]);
    }
}
*/


var myarr2:(string | number)[][]= [[10,"xyz"],["abc",100]]


for(var i in myarr2)
{
    for (var j in myarr2[i])
    {
        console.log(myarr2[i][j])
    }
}




