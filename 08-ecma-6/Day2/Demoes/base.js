// console.log("start base");

let projectId=2;

// import {projectName ,setProjectName} from "./module1.js" 
import * as module1 from "./module1.js" 
import {duration ,projectName as Pname} from "./module2.js" 
module1.setProjectName(2000);
console.log("base",module1.projectName,Pname,duration);
// projectName="new Value";//error

// console.log("end base")
