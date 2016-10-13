(function(window) {

  'use strict';
  var clickableContent = window.document.getElementById('clickableContent');
  var contentHeight = clickableContent.offsetHeight;
  window.document.getElementById('contentHeight').textContent = contentHeight + 'px';

  var MessageCtrl = window.MessageCtrl = {
    postMessage: postMessage,
    notify: notify
  };

  function postMessage(message) {
    window.parent.postMessage(message, '*');
  }

  function notify(id, message) {
    postMessage({
      namespace: 'ls.event.notification',
      data: {
        id: id,
        message: message
      }
    });
  }

  postMessage({namespace: 'ls.event.onload'});
  postMessage({namespace: 'ls.event.height', data: { height: clickableContent.offsetHeight }});

})(window);
