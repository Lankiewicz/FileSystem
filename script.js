var fs = require('fs');
var colors = require('colors');

fs.readFile('C:\Users\JakubL\Desktop\zadanie_13_7', 'utf-8', function(err, files) {
    console.log('Dane przed zapisem!'.blue);
    console.log(files);
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});