let newArray = [5,3,9,47,8];
console.log(`Array before sorting = ${newArray}`);
//// first task //////////
let sortedArray = newArray.sort((a,b)=> a-b);
console.log(`sortedArray = ${sortedArray}`);
let filteredArray = newArray.filter((a)=> a>5);
console.log(`numers > 5 = ${filteredArray}`);
let max = Math.max(...newArray);
let min = Math.min(...newArray);
console.log(`max number is ${max} however min number is ${min}`);
let multi = Array.from(newArray,(a)=> a*5);
console.log(`multi array = ${multi}`);

//// task 2 
console.log("################# second task ####################");
let operatorFunction = (operator,...numbers)=>`result of ${operator} operator of ${numbers} is ${eval(numbers.join(operator))}`;
 let result = operatorFunction("+",1,2,3,4,5);
 console.log(result);

 // task 3 
 console.log("################# third task ####################");
 let myFunc = (name,age,printData =function (obj) {console.log(obj.name,obj.age)})=>{
     let obj={name,age};
     printData(obj); 
 }

 let printObj = (obj)=>console.log(obj.name+"hi");
 
 myFunc("sayed",20,printObj);
 console.log("with deafault value ");
 myFunc("amr","30");
 console.log("########### finished ##########");