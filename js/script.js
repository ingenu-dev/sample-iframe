(function(window) {

  'use strict';
  var clickableContent = window.document.getElementById('clickableContent');

  function postMessage(message) {
    window.parent.postMessage('message', 'http://localhost:3006',message);
  }

  clickableContent.addEventListener('click', function() {
    postMessage('Yo');
    console.log('Sent message from iframe.');
  });

})(window);
