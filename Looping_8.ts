/*

  -while
  - Do while
  - For

Jumping statements
  - Break and continue



var i:number=1;
while(i<=10)
{
  console.log(i); // 1 2 3 4 ....
  i++;
}

 // even numbers

var i:number=2;
while(i<=10)
{
    console.log(i)
    i=i+2
}



var i:number=10;
while (i>0)
{
    console.log(i)
    i--;
}



var i:number=10;     // 10 9 8 7 .....
do 
{
    console.log(i);
    i--;
}while (i>0);



// for

for (var i:number=1;i<=10;i++)
{
    console.log(i);
}


for (var i:number=1;i<=10;i++)
{
    if (i==5)
    {
    break;
    }
    console.log(i);
}

*/

for (var i:number=1;i<=10;i++)
{
    if (i==3 || i==5)
    {
        continue;
    }

console.log(i)
}