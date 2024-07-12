var ghpages = require('gh-pages');
var fs = require('fs');

fs.writeFile('dist/CNAME', "neofolks.live", function(err) {});
ghpages.publish('dist', function(err) {});