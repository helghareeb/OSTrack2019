function filterGrades(item)
{
    return item>10;
}
function looping(item,index,array)
{
    array[index]=item+20;
    console.log(item,index);
}

function summAll()
{
    global=arguments;
    return eval(arguments.join("+"));
    // var result=0;
    // for(i=0;i<arguments.length;i++)
    // {
    //     result+=arguments[i];
    // }
    // return result;
}

grades=[10,2,20,3,12,19];
names=["Ahmed","mona","eman","Hala","Ebtesam","hend"];
numbers=[];
mixed=[2,"eman",true];

// grades[100]=100;
for(i=0;i<grades.length;i++)
{
    console.log(grades[i]);
}
console.log("***********************");
for(i in grades)
{
    
    console.log(grades[i]);

}
console.log("***********************");

// grades.forEach(looping);



// var resultArray=grades.filter(filterGrades);
var resultArray=grades.filter(function(item){
    return item>10;
});


grades.sort(function(a,b){
    // if(a>b)return 1;
    // else if(a<b) return -1;
    // else return 0;
    return a-b;
});

names.sort(function(a,b){
    a=a.toLowerCase();
    b=b.toLowerCase();
    if(a>b)return 1;
    else if(a<b) return -1;
    else return 0;
  
});












