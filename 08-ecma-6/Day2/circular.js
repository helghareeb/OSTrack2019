import { Shape } from "./shape.js";

class Circule extends Shape
{
    constructor(rad,color)
    {
        super(color);
        this.rad = rad;
    }
    getArea ()
    {
        return 3.14*this.rad*this.rad;
    }
}

export {Circule};