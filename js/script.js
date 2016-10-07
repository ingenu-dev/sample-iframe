(function(window) {

  'use strict';
  var clickableContent = window.document.getElementById('clickableContent');
  var contentHeight = clickableContent.offsetHeight;
  window.document.getElementById('contentHeight').textContent = contentHeight + 'px';

  function postMessage(message) {
    window.parent.postMessage(message, 'http://localhost:3006');
  }

  postMessage({namespace: 'ls.event.onload'});
  postMessage({namespace: 'ls.event.height', data: { height: clickableContent.offsetHeight }});

})(window);
