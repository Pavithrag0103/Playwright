/*

-> Inheritance - we can use one methods and variables in one class to other
> Keyword - Extend



class person
{
    name:string;

    constructor(name:string)
    {
        this.name=name;
    }
}

class Employee extends person{
    emp:number;

    constructor(emp:number,name:string)
    {
        super(name);
        this.emp=emp;
        
    }
    display():void{
        console.log(this.emp);
        console.log(this.name);
    }
}
 

var obj=new Employee(101,"pavi");
obj.display()
*/

// overriding


class bank {
    rate:number=0;

    roi():number{
        return this.rate

    }
}

class bank1 extends bank{
    rate:number=5;    // overriding
    roi():number{
        return this.rate
    }
    
}

class bank2 extends bank{
    roi():number{
        return 20;
    }
}

var x=new bank();
console.log(x.roi());

var x=new bank1();
console.log(x.roi());

var x=new bank2();
console.log(x.roi());