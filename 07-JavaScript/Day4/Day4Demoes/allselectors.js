
    //************* selecting element by Id
    document.getElementById('example'); //same as example
    //window.spanElm1
    //document.spanElm1 --> not working

    //************* selecting element by Name  return array of nodeList
    document.getElementsByName("exampleDiv");
	//.style="";
	//.innerHTML
	
	basicForm //will return the form
	//exampleDiv //will not working
	
	
    //not working (div should not has name attributes)
    //only works for forms  document.basciForm (window.basicForm works )
    //window.UserData.City     calling city form element by name through formID 

    //so finally using methods is the better choice

    //******************** selecting element by TgeName return array of nodeList
    document.getElementsByTagName("li");
    //or document.getElementsByTagName("li")[0]

    var formElm = document.getElementsByTagName("Form")[0];
    var inputElm = formElm.getElementsByTagName("input");


    //****************************** HTML Collections
    document.images
    document.images["firstImage"]  //byName but not recommended   
    document.images["secondImg"]  
    document.images[0]

    document.forms
    document.forms[0]
    document.forms["UserData"] //name
    document.forms["basicForm"] //id

    document.forms[1].elements;  //returns all forms elemnts
    document.forms[1].elements[1];
    //UserData.elements["City"];   //not working
    //document.forms[0].City       //not working
    document.forms["UserData"].City
    document.forms["UserData"].City.options //return all options
    document.forms["UserData"].City.options[1]

    //*************************** selecting element by Class name

    //case-senstive

    //any element contains this class as part of there classes
    document.getElementsByClassName("bPink");
    //returns table and select
	document.getElementsByClassName("bGrey");
    //only that have the collection of selected classes and order is not important
    document.getElementsByClassName("fontBlue bGrey ");
    //returns  Form Only

    // get it from another selection
    var FormElement = document.getElementById("UserData");
    FormElement.getElementsByClassName("bPink");

	

    ////////////////////////////////////// Attributes
    //as property
    var imgObj = document.images[0];
    imgObj.src;
    imgObj.src="images/flower.jpg"
	//imgObj.style.width="300px" any styling is inside style

	
	//talk about className
	
    var checkObj = document.getElementsByName("hoppy")[0];
    checkObj.defaultChecked = false;
    document.forms[0].className;

    //as Methods
    aObj = document.getElementById("googleAnchor")
    aObj.setAttribute("href", "http:www.iti.gov.eg")
    aObj.getAttribute("href");
    aObj.setAttribute("class", "bGrey");

    aObj.removeAttribute("class");
	
	//class has special className 
	//aObj.className="fontLarge bPink"

    /*  create ,insert ,delete   */

    //creating and appending Child li to UL
    var liItem = document.createElement("li")
    var liTxt = document.createTextNode("water") //innerText is better use
	//change class
    liItem.appendChild(liTxt);
    document.getElementsByTagName("ul")[0].appendChild(liItem);

    //moving water to ol
    //var wLi = document.querySelector("ul").lastChild
    //document.getElementsByTagName("ol")[0].appendChild(wLi);
 
    //clone water without remove it from ul List
    document.querySelector("ul").lastElementChild.cloneNode(true)
    //return <li>water</li>
    document.querySelector("ul").lastElementChild.cloneNode(false)
    //return <li></li>

    // If the <ul> element has any child nodes, remove its first child node
    var list = document.querySelector("ul");
    if (list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }

