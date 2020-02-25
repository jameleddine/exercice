interface IPerson { 
    firstName:string; 
    lastName:string;
    sayHi: ()=>string; 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object "); 
 console.log(customer.firstName); 
 console.log(customer.sayHi());  
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
 console.log("Employee  Object ");
 console.log(employee.firstName);
 console.log(employee.lastName);

 function call(a,b){
    return a + b 
 }
 var c = 1;
 var d = c || ''
 call(c,d);


 function multiply(a, b = 1) {
   return a * b;
 }
 
 console.log(multiply(5, 2));
 // expected output: 10
 
 console.log(multiply(5));
 // expected output: 5