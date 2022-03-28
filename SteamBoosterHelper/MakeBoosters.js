//document.body.style.border = "5px solid red";

let button = document.createElement('button');
button.innerText = 'Make My Boosters';
button.name = 'MakeBoostersButton';
button.style.cssText += "border: 1px solid black; width: 125px; height: 40px;margin-right: 54px;";
button.style.cssText += "color: black; border-radius: 4px; margin-left:50px;";

//button.classList.add("btn_darkblue_white_innerfade", "btn_medium");
button.classList.add("btnv6_blue_blue_innerfade", "btn_medium", "btn_makepack");

let parent = document.querySelector(".booster_game_selector");
parent.style.width = "600px";

//button Event Listener
button.addEventListener("click", () => {
	//alert(appids);
	if (appids.length > 0) {
		alert(appids.length);
		createScriptString();
		//MakeBoosters();
	}
	else {
		alert("No appids found, did you add them via Extensions -> SteamBoosterHelper -> Options?");
	}
});

parent.appendChild(button);
//parent.style.border = "5px solid red";

//functions

let scriptString = '';
let appids = [];

function MakeBoosters() { //inject script
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.textContent = scriptString;
	document.head.appendChild(script);
}

function createScriptString() {
	//let appids = ['1328670', '1343370', '524220', '1113560', '1158850', '787480', '412830', '324160', '1113000', '447530'];
	scriptString = ''; //reset string
	appids.forEach((id) =>
		scriptString += `CBoosterCreatorPage.ExecuteCreateBooster({appid: '${id}',series:'1'}, '2'); `);
	alert(scriptString);
}

function getUsersAppids() {
	let storageItem = browser.storage.sync.get('appids');
	storageItem.then((res) => {
		if (res.appids.length > 0) {
			appids = res.appids.split(",").map(item => item.trim());
			//alert(`${appids[0]}|${appids[1]}|${appids[2]}|`);
		}
	});
	e.preventDefault();
}

//document.addEventListener('DOMContentLoaded', getUsersAppids);
window.onload = getUsersAppids;