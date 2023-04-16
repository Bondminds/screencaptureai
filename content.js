chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == 'capture') {
      chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(screenshotUrl) {
        sendResponse({screenshotUrl: screenshotUrl});
      });
      return true;
    }
  });
  