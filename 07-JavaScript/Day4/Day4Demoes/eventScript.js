function UpdateButton()
{
    alert("hello from function");
}

function UpdateButton2()
{
    alert("second function form inside");
}

window.addEventListener("load",function(){

    //alert(document.images[0])

    document.querySelector("button").onclick=UpdateButton2;
    // document.querySelector("button").onclick=function(){
    //     alert("hello")
    // };
    // document.querySelector("button").onclick=null;

    document.querySelector("button").addEventListener("click",UpdateButton);
    document.querySelector("button").removeEventListener("click",UpdateButton);

    testingDiv.onmouseover=function(){
        // console.log(event);
        this.style.backgroundColor="lightgray";
    };

    testingDiv.onmouseout=function(){
        // console.log(event);
        this.style.backgroundColor="pink";
    };


    testingDiv.onmousemove=function(event){
        //  console.log(event);
        this.innerText=event.x+ " : "+event.y;
    };





});//load event