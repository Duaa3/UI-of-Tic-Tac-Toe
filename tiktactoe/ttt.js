console.log("Starting my Application");
let number = 10;
let name ="TRA";
let flag= true;
let listOfNames =["MrA","MrB"," MrC"];
let myMap = new Map();
myMap.set("id",12345);
myMap.set("name","MrA");
console.log(myMap.get("name"));

let myObj = {"name": "MrB","id": 121};
console.log(myObj.name,myObj.id);

for(let index=0; index<listOfNames.length; index++){
    console.log(listOfNames[index]);
}

let lamdaFunc =(n1,n2)=> {
    console.log("Adding two numbers", n1,"and",n2);
    return n1+n2;
}
console.log(lamdaFunc(5,6));

myMap.forEach((v,k)=>{
console.log(k,v);
});
function mySum(...args){
    console.log(args);
}
mySum(1,2,3,4,5);
console.log("");
class Student {
    id=0;
    name="asda";


    getName= () => this.name;
}
let student = new Student();
console.log(student.id);
console.log(student.name);
console.log(student.getName());


