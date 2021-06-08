var count=1;
function addData() {
    //console.log("Event fired")
    var title = document.getElementById("title").value; //retreive value of name
    var textarea = document.getElementById("textarea").value;     // retrieve value of age 

    var divTag = document.getElementById("main");    // point to div tag using id main 
    imgsrc = document.getElementById("imagecont").value;
    console.log("value of image "+imgsrc);
    var empTag = document.createElement("p");  
    var img = document.createElement("img");
    var br = document.createElement("br");
    empTag.appendChild(br);
    img.src=imgsrc
        
       //img.setAttribute("src","imgsrc")
        /**img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
         imgtag=document.getElementById('body').appendChild(img); **/

        
     //src =document.getElementById("imagecont").value // p tag created 
     

    var empTagContent = document.createTextNode(title)
    var empTagContent2 = document.createTextNode(textarea)// content created 
    empTag.appendChild(empTagContent);  
    empTag.appendChild(br);
    empTag.appendChild(empTagContent2);
    empTag.appendChild(img);     // content added to p

    empTag.setAttribute("class","myClass");  // adding the class attribute 
    
    empTag.setAttribute("id",count);    // adding id attibute 
    


    var deleteNode = document.createElement("a");
    var deleteNodeValue = document.createTextNode("X");
    deleteNode.appendChild(deleteNodeValue);

    deleteNode.setAttribute("href","#");
    deleteNode.setAttribute("onclick","deleteTag("+count+")");
    
    
    empTag.appendChild(deleteNode);

    divTag.appendChild(empTag);         // p added to div 
    count++;
    reset();
}

function reset() {
    document.getElementById("title").value=""
    document.getElementById("textarea").value=""
    document.getElementById("imagecont").value=""
}

function deleteTag(idValue) {
    console.log("Event fired..."+idValue)
    var obj = document.getElementById(idValue);
    obj.remove();
}

