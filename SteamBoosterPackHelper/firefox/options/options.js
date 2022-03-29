function saveOptions(e) {
    browser.storage.sync.set({
        appids: document.querySelector("#appids").value
    });
    e.preventDefault();
}

function restoreOptions() {
    var storageItem = browser.storage.sync.get('appids');
    storageItem.then((res) => {
        document.querySelector("#appids").innerText = res.appids;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);