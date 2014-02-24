var fs = require('fs');
var should = require('should');
var gutil = require('gulp-util');
var gparser = require('../');

require('mocha');

describe('gulp-htmlparser', function() {
  it('should parse html to json', function(done) {
    var g = gparser();
    var fakeFile = new gutil.File({
      base: 'test/fixtures',
      cwd: 'test/',
      path: 'test/fixtures/normal.html',
      contents: fs.readFileSync('test/fixtures/normal.html')
    });
    g.once('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.contents);
      String(newFile.contents).should.equal(fs.readFileSync('test/expected/normal.json', 'utf8'));
      done();
    });
    g.write(fakeFile);
  });

  it('should parse html to json with extension options', function(done) {
    var g = gparser({ext: '.js'});
    var fakeFile = new gutil.File({
      base: 'test/fixtures',
      cwd: 'test/',
      path: 'test/fixtures/normal.html',
      contents: fs.readFileSync('test/fixtures/normal.html')
    });
    g.once('data', function(newFile){
      should.exist(newFile);
      should.exist(newFile.contents);
      String(newFile.contents).should.equal(fs.readFileSync('test/expected/ext.js', 'utf8'));
      done();
    });
    g.write(fakeFile);
  });
});
