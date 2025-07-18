/*

-> Tuple - store diff sets of data with diff data type
eg  var emp=[1,"employee"]
var emp:[number,string]=[1,"pavi"]


var empID:number=101;
var empname:string="pavi";
// using tuple 
var emp=[101,"pavi"]; 
var employee:[number,string]=[101,"pavi"]
console.log(employee[0])



// ADD ELEMENTS
var employee:[number,string]=[101,"pavi"]
employee.push(102,"Praveen",2000000)   //push will used to add more records
console.log(employee)

// REMOVE ELEMENTS

var empl=[101,"pavi"]
empl.pop();
console.log(empl)



// update element

var emp=[101,"pavi",200000]
console.log(emp)
emp[1]="praveen"
console.log(emp)
*/


// Tuple array

var student:[number,string];
student=[[1,"pavi"],[2,"praveen"]]

console.log(student[1])
console.log(student[0])



