function inventoryFilter() {
    let searchFilter = 'booster pack';
    let filter = `async function start(){await g_ActiveInventory.LoadCompleteInventory();await Filter.ApplyFilter('${searchFilter}');} start();`;

    let filterScript = document.createElement('script');
    filterScript.type = 'text/javascript';
    filterScript.textContent = filter;
    document.head.appendChild(filterScript);

    console.log(`filtering for ${searchFilter}...`);
}

window.addEventListener("inventoryFilter", function (e) {
    console.log('event recived. Data: ' + e.detail.message);
    inventoryFilter();
});