(function() {
  var styleElement = document.getElementById(chrome.runtime.id);
  if (styleElement) {
    styleElement.remove();
    return;
  }
  var css = ({
    'www.youtube.com': 'app_yt_HoveredImg.css',
    'www.messenger.com': 'fb_messenger_styles.css',
    'www.google.com': 'google_styles.css',  
    'translate.google.com': 'google_styles.css',
    'apis.google.com': 'google_styles.css',
  })[location.hostname];
  if (!css) {
    return;
  }  
  styleElement = document.createElement('link');
  styleElement.id = chrome.runtime.id;
  styleElement.rel = 'stylesheet';
  styleElement.href = chrome.runtime.getURL(css);
  document.documentElement.appendChild(styleElement);
})();
