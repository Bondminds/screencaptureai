document.addEventListener('DOMContentLoaded', function() {
    var captureButton = document.getElementById('captureButton');
    captureButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'capture'}, function(response) {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          if (response && response.screenshotUrl) {
            var screenshotUrl = response.screenshotUrl;
            var downloadLink = document.createElement('a');
            downloadLink.href = screenshotUrl;
            downloadLink.download = 'screenshot.png';
            downloadLink.click();
          } else {
            console.error('Failed to capture screenshot.');
          }
        });
      });
    });
  });
  