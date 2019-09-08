
/********* Javascript Functions  */
//data=50;
//console.log("********  "+global);

//
//console.log(myName);

var global=20;

getProductData(2);



function getProductData(ID,type="Flower")
{
    console.log(arguments);
    console.log("global from inside********  "+global);
    data=40;
    var result=3;
    var global=100;
    // console.log("Product Function "+ID);
    console.log("global from inside "+global);
    return "Product Function "+ID+" "+type;
}
//call
//console.log(" Data Before calling "+data);
// console.log("global from ouside before calling "+global);

// console.log("global from ouside after calling "+global);

// conole.log(" Data after calling "+data);


// /data=500;
// console.log(" Data after change "+data);

// getProductData();
// var result=getProductData(4);
// getProductData();


function summAll()
{
    var result=0;
    for(i=0;i<arguments.length;i++)
    {
        result+=arguments[i];
    }
    return result;
}

summAll(1,2,3);
summAll(1,2,3,10,10);



var square=function()
{
    //code
}

square();









