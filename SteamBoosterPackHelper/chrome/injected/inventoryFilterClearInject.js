function clearInventoryFilter() {
    let clearFilter = "Filter.ClearFilter();";

    let clearFilterScript = document.createElement('script');
    clearFilterScript.type = 'text/javascript';
    clearFilterScript.textContent = clearFilter;
    document.head.appendChild(clearFilterScript);

    console.log('clearing filter...');
}

window.addEventListener("clearInventoryFilter", function (e) {
    console.log('event recived. Data: ' + e.detail.message);
    clearInventoryFilter();
});