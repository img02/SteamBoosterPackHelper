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
	if (appids.length < 1) {
		await getUsersAppids();
	}
	if (confirm(`Create ${appids.length} booster packs?`)) {
		createScriptString();
	}
});

parent.appendChild(button);
InjectMakeBoosters();
//parent.style.border = "5px solid red";






// ◉_◉
//functions
let scriptString = '';
let appids = [];

function InjectMakeBoosters() { //inject script 
	let script = document.createElement('script');
	script.src = chrome.runtime.getURL('makeInject.js');
	script.onload = function () {
		this.remove();
	};
	document.head.appendChild(script);
}

function createScriptString() {
	scriptString = ''; //reset string
	appids.forEach((id) =>
		scriptString += `CBoosterCreatorPage.ExecuteCreateBooster({appid: '${id}',series:'1'}, '2'); `);
	//alert(scriptString);
	console.log(scriptString);

	window.dispatchEvent(new CustomEvent('MakeBoosterScriptString', {
		'detail': {
			'message': scriptString,
		}
	}));
}

async function getUsersAppids() {
	let storageItem = chrome.storage.sync.get('appids');

	let res = await storageItem;
	if (res.appids.length > 0) {
		appids = res.appids.split(",").map(item => item.trim());
		console.log(`appids loaded. test: |${appids[0]}|${appids[1]}|${appids[2]}|`)
	}
}

window.onload = getUsersAppids;