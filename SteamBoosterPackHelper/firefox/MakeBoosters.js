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
button.addEventListener("click", async () => {
	console.log("Trying to make boosters...");
	let success = false;
	if (!(appids.length > 0)) {
		console.log("AppIds not found, trying to get them now...");
		await getUsersAppids(); //try to reload appids
	}
	if (appids.length > 0) {
		success = true;
		if (confirm(`Make ${appids.length} booster packs?`)) {
			//alert(`${appids.length} + success`);
			console.log("AppIds found! Making booster packs now.");
			createScriptString();
			MakeBoosters();
		}
	}

	if (success == false) {
		alert("No appids found, did you add them via Extensions -> SteamBoosterPackHelper -> Options?");
		console.log("No appids found, did you add them via Extensions -> SteamBoosterPackHelper -> Options?");
	}
});

parent.appendChild(button);
//parent.style.border = "5px solid red";



// ◉_◉
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
	scriptString = ''; //reset string
	appids.forEach((id) =>
		scriptString += `CBoosterCreatorPage.ExecuteCreateBooster({appid: '${id}',series:'1'}, '2'); `);
	//alert(scriptString);
}

async function getUsersAppids() {
	let storageItem = browser.storage.sync.get('appids');

	let res = await storageItem;
	if (res.appids.length > 0) {
		appids = res.appids.split(",").map(item => item.trim());
		//alert(`${appids[0]}|${appids[1]}|${appids[2]}|`);
		console.log(`appids loaded. test: |${appids[0]}|${appids[1]}|${appids[2]}|`)
	}
}

window.onload = getUsersAppids;