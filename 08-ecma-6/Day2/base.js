import {Shape} from "./shape.js"
import * as module from "./rect.js"
import {Circule} from "./circular.js"
let s = new Shape("blue");
console.log(s.drawnShape());
let myRect = new module.Rectangle (2,3);
let mySquare = new module.Square(2,"yellow");
console.log(myRect);
console.log(mySquare.getArea());
let myCircule = new Circule(12,"pink");
console.log(myCircule.getArea());
export {myRect};

