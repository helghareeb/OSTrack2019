/*
    1- loading with ready and $
    2- bind with on , unbind with off
    3- this and event objcet
    4- problem adding elements on run time  (DELEGATION)
         // ulEl=document.getElementsByTagName("ul")[0];
            // liElm=document.createElement("li");
            // liElm.innerText="new Item";
            // liElm.style.color="red";
            // ulEl.appendChild(liElm);
    5- bind more than one event on same element (each event with it's own handler function)
    6- bind more than one event on same element (all with same handling function)
    7- bind more than one event on same element (each event with it's own handler function using short on({}))
    8- eventsshortcuts
    9- events triggers    
*/ // $(function(){alert();})

// $(document).ready(function(){

//     alert("Loading");
// });  


$(function(){
   
    // $("ul li").on("click",function(){
    //      //console.log(this,$(this));  //html object
    //     // alert(this.innerText);
    //     //  alert($(this).text());
    //     var oldValue=$(this).text();//getting
    //     $(this).text(oldValue+ " clicked!")
    // });//li click
    $("ul").one("click","li",function(){
       // console.log(this,$(this));  //html object
       // alert(this.innerText);
       //  alert($(this).text());
       var oldValue=$(this).text();//getting
       $(this).text(oldValue+ " clicked!");

   });//li click
    ulEl=document.getElementsByTagName("ul")[0];
    liElm=document.createElement("li");
    liElm.innerText="new Item";
    liElm.style.color="red";
    ulEl.appendChild(liElm);

   //more than one event on the same item 
//    $("#evtTarget").on("mouseover",function(){
//     //    $(this).css("background-color","pink");
//        $(this).addClass("boxBGround");
//    });//over

//    $("#evtTarget").on("mouseout",function(){
//     //    $(this).css("background-color","pink");
//        $(this).removeClass("boxBGround");
//    });//out

//6- 
// $("#evtTarget").on("mouseover mouseout",function(){
//         //    $(this).css("background-color","pink");
//            $(this).toggleClass("boxBGround");
//        });//out and out

//    $("#evtTarget").on("mousemove",function(event){
//         // console.log(event);
//     //    $(this).css("background-color","pink");
//      //  $(this).removeClass("boxBGround");
//         $(this).text(event.pageX+ " : "+event.pageY);
//    });//move


//7-
$("#evtTarget").on({
    "mouseover mouseout":function(){ $(this).toggleClass("boxBGround");},
       
    "mousemove":function(event){  $(this).text(event.pageX+ " : "+event.pageY);},
    "click":function(){alert("Clicked");}
});//all evevnts


//8-
// $("#evtTarget").click(function(){

// });

//9-
// $("#evtTarget").trigger("click")

});//loading























