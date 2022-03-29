function saveOptions(e) {
    chrome.storage.sync.set({
        appids: document.querySelector("#appids").value
    });
    e.preventDefault();
}

function restoreOptions() {
    var storageItem = chrome.storage.sync.get('appids');
    storageItem.then((res) => {
		if (res.appids != 'undefined'){
        document.querySelector("#appids").innerText = res.appids;
		}
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);