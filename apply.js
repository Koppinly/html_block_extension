// Apply JS


const utils = window.optimizely.get('utils');

utils.waitForElement('.confirm-details > .card-body')
.then(function(elem) {
  // Prepend the extension HTML to the selected element
  elem.insertAdjacentHTML('afterbegin', extension.$html);
});
