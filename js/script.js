(function(window) {

  'use strict';
  var clickableContent = window.document.getElementById('clickableContent');

  function postMessage(message) {
    window.parent.postMessage(JSON.stringify({windowHeight: clickableContent.innerHeight}), 'http://localhost:3006');
  }

  clickableContent.addEventListener('click', function() {
    postMessage('Yo');
    console.log('Sent message from iframe.');
  });

})(window);
