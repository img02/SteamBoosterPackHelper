function OpenBoosters(scriptString) {
     console.log("Opening Boosters!");
     let script = document.createElement('script');
     script.type = 'text/javascript';
     script.textContent = scriptString;
     document.head.appendChild(script);
}

window.addEventListener("OpenBoosterScriptString", function (e) {
     console.log('event recived. Data: ' + e.detail.message);
     scriptString = e.detail.message;

     console.log("Opening Boosters!");
     OpenBoosters(scriptString);


     setTimeout(function () {
          clearInventoryFilter();
     }, 500);
});