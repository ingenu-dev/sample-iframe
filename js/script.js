(function(window) {

  'use strict';
  var clickableContent = window.document.getElementById('clickableContent');

  function postMessage(message) {
    window.parent.postMessage(message, 'http://localhost:3006');
  }

  clickableContent.addEventListener('click', function() {
    postMessage('Yo');
    console.log('Sent message from iframe.');
  });

  postMessage({type: 'ls.event.onload'});
  postMessage({type: 'ls.event.height', data: { height: clickableContent.offsetHeight });

})(window);
