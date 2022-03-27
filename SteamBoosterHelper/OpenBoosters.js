//document.body.style.border = "5px solid red";

let button = document.createElement('button');
button.innerText = 'Open All Boosters';
button.name = 'OpenBoosterButton';
button.style.cssText += "border: 1px solid black; width: 125px; height: 40px;margin-right: 54px;";
button.style.cssText += "color: black; border-radius: 4px;vertical-align: middle;float: right;";
button.classList.add("btn_darkblue_white_innerfade", "btn_medium");

let parent = document.getElementById('inventory_logos');
//parent.style.border = "5px solid red";

//button Event Listener
button.addEventListener("click", ()=>{
    getInventory();
});

parent.appendChild(button);



// ◉_◉
//functions
var names = '';

function getInventory(){
var elements = document.getElementsByClassName("item app753 context6");
for(var i = 0; i < elements.length; i++) {
    names += elements[i].id + " ";
    }
    names = names.replaceAll("753_6_","");
    console.log(names);
    alert(names);
}