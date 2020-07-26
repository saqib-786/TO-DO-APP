function addList(){
    var toDo = document.getElementById("to_do");
    var toDoTime = document.getElementById("to_do_time");
    var li = document.createElement("li");
    var listText = document.createTextNode(to_do.value + " " + to_do_time.value);
    li.appendChild(listText);
    list.appendChild(li);
    to_do.value = "";
    to_do_time.value = "";
    var btnDelet = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    btnDelet.appendChild(delText);
    li.appendChild(btnDelet);
    btnDelet.setAttribute("class","btn_1");
    btnDelet.setAttribute("onclick", "deletItem(this);");

    var eidtBTN = document.createElement("button");
    var eidText = document.createTextNode("EDIT");
    eidtBTN.appendChild(eidText);
    li.appendChild(eidtBTN);
    eidtBTN.setAttribute("class","eidtbtn")
    eidtBTN.setAttribute("onclick", "eidtList(this);");
    console.log(li);
}

var list = document.getElementById("list");


function deletItem(e){
    e.parentNode.remove();
}
function deletAll(){
    list.innerHTML = " ";
}

function eidtList(e){
    var newValue = prompt("Enter Edit Value",e.parentNode.firstChild.nodeValue );
    
    e.parentNode.firstChild.nodeValue = newValue;
    
    console.log();

}

// function timer(){
//     var toDoTime = document.getElementById("to_do_time");
//     var inputTime = toDoTime.value;
    
//     console.log(inputTime);
    
// }
