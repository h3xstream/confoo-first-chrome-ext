

chrome.runtime.onInstalled.addListener(() => {

  chrome.contextMenus.create({
        "title": 'Search for the acronym "%s"',
        "contexts": ["selection"],
        "id": "myContextMenuId"
    })
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.create({
        url: chrome.runtime.getURL("search.html?q=") + encodeURIComponent(info.selectionText)
    });
})

