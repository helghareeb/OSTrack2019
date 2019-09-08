

var obj={}; // obj=new Object();

title="Jquery";
var book={
        title:"JS",
        "main Title":"ES5",
        versions:[1,2,2.2],
        author:{firstName:"eman",lastName:"fathi"},
        borrow:function(){
            // console.log("Borrowing")
        },
        buy:function(name){
            // console.log(name+ " buy "+this.title)
        }
}
        //calling
        //set get
        book.title;

        book.title="Javascript";
        book["main Title"];
        book.borrow();
        book["buy"]("eman");
        book.author.firstName;
        book["author"].firstName;
        book["author"]["lastName"];
        //add delete
        //add property
        book.page=90;
        //delete property
        delete book.title;

        //add function
        book.read=function(){ console.log("reading")}
        //delete function
        delete book.borrow
for(key in book)
{
    // if(typeof book[key]!="function" )
    // console.log(key,book[key]);
}
var age=900;
/*********************class */
// function Student(name,_age,grade)
// {
//     this.name=name;
//     this.grade=grade;

//     var age=_age;
    
//     this.getAge=function(){ return age}
//     this.setAge=function(value){age=value}


//     this.printData=function(){
//         console.log(this.name,this.grade,age);
//     }

// }

// var student1=new Student("eman",20,100);
// var student2=new Student("mona",30,99);
//how to prevent function call




/************************* JSON  *************/
strStudent="{name:'eman'}";

var counter=1;
function updateTitle()
{
    // window.document.title="changed";
    window.document.title=counter++;
}
// var samllWindow=open("smallwindow.html","smallcreated","width=300,height=300")

// timerId=setInterval("alert('hello')",2000);

// timerID=setTimeout("alert('hello');nnnn;jjjj",2000);
// timerID=setInterval("updateTitle()",500);
setInterval(function(){
    //code
    window.document.title=counter++;

},200);





//clearInterval(timerID);
// clearTimeout(timerID)






