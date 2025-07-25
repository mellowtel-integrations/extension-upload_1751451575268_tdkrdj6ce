import { initializeMellowtel } from 'mellowtel';

initializeMellowtel();

// Original background script code
chrome.action.onClicked.addListener((tab) => {
    if (tab.url && tab.url.includes("medium.com/")) {
        let currentTabUrl = tab.url;
        
        let urlObj = new URL(currentTabUrl);
        let host = urlObj.hostname;
        let path = urlObj.pathname;
        let newURL = "https://freedium.cfd/" + host + path;

        chrome.tabs.create({ url: newURL });
    } else {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "assets/142643505.png",
            title: "Extension Alert",
            message: "This extension only works with Medium."
        });
    }
});