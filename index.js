function addItem(){
    var task=document.getElementById("todoInput").value;
    var ul=document.getElementById("myUl");
    var li=document.createElement("li");
    var text=document.createTextNode(task);
    li.appendChild(text);
    ul.appendChild(li);

    var checkMark=document.createElement("button");
    checkMark.innerHTML="&check;";
    checkMark.className="listItemButton"
    checkMark.setAttribute("onclick","checkMe(this)");
    li.appendChild(checkMark);

    var crossMark=document.createElement("button");
    crossMark.innerHTML="&#x2715;";
    crossMark.className="listItemButton"
    crossMark.setAttribute("onclick","removeMe(this)");
    li.appendChild(crossMark);

    document.getElementById("todoInput").value=" ";

}

function checkMe(item){
    var liTag=item.parentElement;
    liTag.style.textDecoration=(liTag.style.textDecoration == "line-through")? "none":"line-through";
}


function removeMe(item){
    var liTag=item.parentElement;
    var ulTag=liTag.parentElement;
    ulTag.removeChild(liTag);
}


function clearList(){
    var ul=document.getElementById("myUl");
    ul.innerHTML=" ";
}