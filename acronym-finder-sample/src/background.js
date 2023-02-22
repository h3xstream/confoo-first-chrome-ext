let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  //console.log('Default background color set to %cgreen', `color: ${color}`);


  chrome.contextMenus.create({
        "title": 'Search for the acronym "%s"',
        "contexts": ["selection"],
        "id": "myContextMenuId"
    })
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    /**chrome.tabs.create({
        url: "https://code.devsnc.com/search?type=Code&q=" + encodeURIComponent(info.selectionText)
    });**/
})

/*
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    
        chrome.tabs.sendMessage(tabId, {
            "currentUrl": tab.url
        });
  });
*/

//test