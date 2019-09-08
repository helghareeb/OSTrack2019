// alert("Hello from External");

//number
var numberInt=2;
var numberFloat=3.3;
numberHexa=0xff;
expNumber=1e2;

//string

myName="Eman  Fathi \"ITI ins.\" \\ kslsdf"+
"sdflksdkjjflksdjfjsdlkkjflkdsjflksdjlkds"+
"jkflkjdslkfjdslkfjldskjlkdsjklsdfj";
var CourseName='javascript ';

//console.log("courseName= "+CourseName);
//bool
var flag=true;

//undefined
var number;
//null

obj=null;

//String Object
var stringObject=new String("This is Firts Day");
var result="";
for(i=0;i<stringObject.length;i++)
{
    if(stringObject[i]==stringObject[i].toUpperCase())
    {
        result+=stringObject[i].toLowerCase();
    }
    else
    {
        result+=stringObject[i].toUpperCase();

    }
}

console.log(result);

