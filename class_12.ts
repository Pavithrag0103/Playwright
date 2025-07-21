
/*
class emp
{
eid:number;
ename:string;

display():any
{
console.log(this.eid);
console.log(this.ename);
}

}

var employee=new emp();  //objects
employee.eid=101;
employee.ename="Pavi";
employee.display();

-------


class emp
{
eid:number;
ename:string;

setData(eid:number,ename:string,deptno:number):void
{
    this.eid=eid;
    this.ename=ename;

}
display():any
{
console.log(this.eid);
console.log(this.ename);
}

}

var employee=new emp(); 

employee.setData(101,"pavi")
employee.display()

*/

class emp
{
eid:number;
ename:string;

constructor(eid:number,ename:string)     // not need to call constructor at the time of obj creation
{
    this.eid=eid;
    this.ename=ename;

}

setData(eid:number,ename:string,deptno:number):void
{
    this.eid=eid;
    this.ename=ename;

}
display():any
{
console.log(this.eid);
console.log(this.ename);
}

}

var employee=new emp(); 

employee.setData(101,"pavi")
employee.display()