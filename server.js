var watch = require('node-watch');
var fs = require('fs');

watch('src/components', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
});