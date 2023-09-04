
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value==='')
    {
        alert("you must write something");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";   // adding a cross at the end of  text
        li.appendChild(span);
    }

    inputBox.value='';    //after adding the  text empty the field
    saveData();
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
    }
    else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
    }
},false);


function saveData(){    //storing the data in browser
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
