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
button.addEventListener("click", () => {
    if (confirm('Open all booster packs?')) {
        console.log("opening boosters!")
        getInventory();
        createScriptString();
        OpenBoosters();
    }
});

parent.appendChild(button);



// ◉_◉
//functions
var names = '';
var scriptString = '';

function OpenBoosters() { //inject script
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = scriptString;
    document.head.appendChild(script);
}

function getInventory() {
    //gets the first 50 items in inventory, unless user loads more pages
    let elements = document.getElementsByClassName("item app753 context6");
    for (var i = 0; i < elements.length; i++) {
        names += elements[i].id + " ";
    }
    names = names.replaceAll("753_6_", "");
    console.log(names);
    //alert(names);
}

function createScriptString() {
    let idArr = names.split(" ");
    for (var i = 0; i < idArr.length; i++) {
        //123 is a throwaway number, normally this should represent the appid 
        //and is used in the receiving element for linking the relevant games badge page.
        scriptString += "OpenBooster('123','" + idArr[i] + "');";
    }
    //alert(scriptString);
    console.log(scriptString);
}