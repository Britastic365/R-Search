// Create the context menu item
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "searchRomanceIO",
        title: "Search romance.io for '%s'",
        contexts: ["selection"]
    });
});

// Handle the click
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchRomanceIO") {
        const query = encodeURIComponent(info.selectionText);
        const url = `https://www.romance.io/search?q=${query}`;

        chrome.tabs.create({ url: url });
    }
});