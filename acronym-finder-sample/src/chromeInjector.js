/**
 * When the button is clicked, the DOM searching code is injected into the page
 * The code does not have access to the background worker or this popup window.
 * However, the script injected will extract information and return it to this popup window.
 * 
 */
function injectDomSearch(tab, callback) {
    
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            files: ['tabInjectPayload.js']
        },
        function (response) {
            console.info("Injected script completed...");
            console.info(response);

            if(response === undefined) {
                console.error("response is undefined");
            }
            else if(response.length > 0) {
                var respObj = JSON.parse(response[0].result);

                callback(respObj.acronyms);
                
                chrome.action.setBadgeText({text: ""+respObj.acronyms.length, tabId : tab.id });
                chrome.action.setBadgeBackgroundColor({ color: [0, 150, 0, 255] });
                

                //    chrome.storage.sync.set({ ['currentAcronyms']: JSON.stringify(acronyms) });
            }
            else {
                console.error("Unexpected response!!!!");
            }
            
        }
    );
}


module.exports = {
    injectDomSearch
};
