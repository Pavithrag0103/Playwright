/*

-> Contains variables and methods
- > unimplemented methods
-> Keyword - INTERFACE
-> not convert interface to js -- use interface for type chcking
called "duck typing and structural subtyping"




interface employee
{
    ename:string;
    eno:number;

    display:()=>void;
}

var emp:employee=
{
    ename:"pavi",
    eno:101,

    display():void{
        console.log(this.ename+"  "+this.eno)
    }
}

console.log(emp.ename);
console.log(emp.eno);

emp.display()

*/

interface f1
{
    a:number;
    b:number;
    sum():number;
}
interface f2 extends f1
{
    x:number;
    y:number;
    sub():number;

}

class c1 implements f2{
    a:number;
    b:number;
    x:number;
    y:number;

    sum():number
    {
        return (this.a+this.b);  
    }
    sub():number
    {
        return (this.x-this.y);
    }

}

var obj=new c1();
obj.a=3
obj.b=3
obj.x=30
obj.y=3


console.log(obj.sum())
console.log(obj.sub())
