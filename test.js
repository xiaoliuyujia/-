var fs = require('fs');
//var stream = fs.createWriteStream("my_file.txt");

// stream.once('open', function(fd) {
//   stream.write("My 1st row\n");
//   stream.write("My second row\n");
//   stream.end();
// });

var index = 0;

function read(file, callback) {
    return fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        }
        callback(data)
    });
}

var output = read('my_file.txt', function (data) {
  console.log(index);
  console.log(data);
  index ++;
});

console.log(output);
