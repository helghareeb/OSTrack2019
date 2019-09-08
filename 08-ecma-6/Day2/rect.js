import { Shape } from "./shape.js";

class Rectangle extends Shape
{
    constructor(width,height,color)
    {
        super(color);
        this.width=width;
        this.height= height;

    }
    getArea()
    {
        return (this.width*this.height);
    }
}

class Square extends Rectangle
{
    constructor(dim,color)
    {
        super(dim,dim,color);
    }
}

export {Rectangle,Square};