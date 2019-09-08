class Shape
{
    constructor(color="red")
    {
        this.color=color;
    }
    drawnShape()
    {
        console.log(this.color);
    }
}

export {Shape};