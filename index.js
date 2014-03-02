var htmlparser = require("htmlparser");
var rext = require('replace-ext');
var map = require('map-stream');

module.exports = function(options) {
  if(!options) options = {};
  if(!options.ext) options.ext = false;

  function parse(file, cb) {

    if (file.isNull()) return cb(null, file); // pass along
    if (file.isStream()) return cb(new Error("gulp-htmlparser: Streaming not supported")); // pass error if streaming is not supported

    var handler = new htmlparser.DefaultHandler(function(err, data){
      file.contents = new Buffer(JSON.stringify(data));
      file.path = rext(file.path, options.ext || '.json');
      cb(null, file);
    });

    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(file.contents);

  }

  // Return a stream
  return map(parse);
};