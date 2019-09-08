$.fn.extend({
    sayHello:function(){
        alert("hello");
    },
    setColor:function(colorValue)
    {
        this.css("color",colorValue);
        return this;
    }
})