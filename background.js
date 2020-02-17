function createTabConfig(tab) {
  return {
    url: tab.url,
    incognito: !tab.incognito,
    focused: true,
    state: "maximized"
  };
}

function onContextClick(info, tab) {
  chrome.windows.create(createTabConfig(tab));
}

// For toolbar button
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create(createTabConfig(tab));
});

chrome.contextMenus.onClicked.addListener(onContextClick);

// Create context menu(for right click) on after install
chrome.runtime.onInstalled.addListener(function(details) {
  chrome.contextMenus.create({
    title: "Cognitofy",
    contexts: ["page"],
    id: "incognitothistab"
  });
});
