var fs = require('fs');

module.exports.getAll = function(req, res) {
  var path = "app/data/tour/"
  console.log("In toursController");

  // Try to read file on tour
  try {
    files = fs.readdirSync(path);
  }
  catch (e) {
    console.log(e);
    res.send('[]');
    res.end();
  }

  // Turn file data into usable array
  var results = "[";
  for (var idx = 0; idx < files.length; idx++) {
      if (files[idx].indexOf(".json") == files[idx].length - 5) {
          results += fs.readFileSync(path + "/" + files[idx]) + ",";
      }
  }
  results = results.substr(0, results.length - 1);
  results += "]";

  res.setHeader('Content-Type', 'application/json');
  res.send(results);
  res.end();
}