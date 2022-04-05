
function MakeBoosters(scriptString) {

	if (scriptString.length > 1) {
		let script = document.createElement('script');
		script.textContent = scriptString;

		document.head.appendChild(script);
		//document.head.removeChild(script);
	}
	else {
		alert("Unable to make booster packs. Did you add appids in the options? Extensions -> SteamBoosterPackHelper -> Extension Options");
	}
}

window.addEventListener("MakeBoosterScriptString", function (e) {
	console.log('event recived. Data: ' + e.detail.message);
	scriptString = e.detail.message;
	MakeBoosters(scriptString);
});