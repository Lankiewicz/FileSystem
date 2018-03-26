var fs = require('fs');

fs.stat('cat.jpg', function(err, stats) {
    console.log(stats);
});

var fs = require('fs');

fs.readFile('./tekst.txt', function(err, data) {
    console.log(data);
});