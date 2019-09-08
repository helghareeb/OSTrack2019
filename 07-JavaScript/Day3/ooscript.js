var counter=1;
function updateTitle()
{
    document.title=counter++;
}

var obj={}; // obj=new Object();
var data="mydata";
var book={
    title:"JS",
    "main Title":"ES5",
    versions:[1,2,2.2],
    author:{firstName:"eman",lastName:"fathi"},
    buy:function(){ 
        console.log("buy");
    },
    borrow:function(name){
        console.log(name," is borrowing "+book.title,data)
    }
};

for(key in book)
{
    // console.log(key,book[key]);
}

// var anotherBook=book;
//class
// var y=999;
// function Student(name,age,grade)
// {
//     this.name=name;
//     this.grade=grade;

//     var age=age;

//     //setters and getters
//     this.setAge=function(value){
//         age=value;
//     }
//     this.getAge=function(){
//         return age;
//     }
//     this.printData=function(){
//         console.log(this.name,this.grade,age);
//     }
// }

// //creation object
// var student1=new Student("eman",20,100);
// var student2=new Student("mirah",40,200);

function Student(name,department,grade)
{
    this.name=name;
    this.department=department;
    this.grade=grade;

    //print function
    this.toString=function()
    {
        console.log(this.name,this.department,this.grade);
    }
}

var student1=new Student("eman","OS",77);


var studentsArray=[];
studentsArray.push(new Student("eman","OS",77));
studentsArray.push(new Student("mona","SD",89));
studentsArray.push(new Student("Hend","os",66));
studentsArray.push(new Student("ahmed","sd",20));
studentsArray.push(new Student("ali","el",20));


// studentsArray.forEach(function(obj){
//     obj.toString();
// });


console.table(studentsArray,["name","grade","department"]);



studentsArray.sort(function(a,b){
    a=a.name.toLowerCase();
    b=b.name.toLowerCase();
    if(a>b) return 1;
    else if (a<b) return -1;
    else return;
});


console.table(studentsArray,["name","grade","department"]);


console.table(studentsArray.filter(function(obj){
    return obj.grade > 40;
}));

// var  timerId=setTimeout("alert('hello')",3000);
 var  timerId=setInterval("updateTitle()",1000);
 var  timerId=setInterval(function(){
     
 },1000);

// clearInterval(timerId)
//clearTimeout(timerId)





