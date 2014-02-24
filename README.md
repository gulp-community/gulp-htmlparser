#gulp-htmlparser
[![Build Status](https://travis-ci.org/stevelacy/gulp-htmlparser.png?branch=master)](https://travis-ci.org/stevelacy/gulp-htmlparser)
[![NPM version](https://badge.fury.io/js/gulp-htmlparser.png)](http://badge.fury.io/js/gulp-htmlparser)

> [gulp](http://gulpjs.com) plugin for parsing html with [htmlparser](https://github.com/tautologistics/node-htmlparser)

<table>
<tr> 
<td>Package</td><td>gulp-htmlparser</td>
</tr>
<tr>
<td>Description</td>
<td>Parse html into js objects with gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

# Usage

## Install

```
npm install gulp-htmlparser --save
```
##Example

```js

var gulp = require('gulp');
var gparser = require('gulp-htmlparser');

gulp.task('task', function () {
  gulp.src('normal.html')
    .pipe(gparser())
    .pipe(gulp.dest('./'));
});


gulp.task('default', 'task');

```

####You can view more examples in the [example folder.](https://github.com/stevelacy/gulp-htmlparser/tree/master/examples)



## LICENSE

(MIT License)

Copyright (c) 2014 Steve Lacy <me@slacy.me> http://slacy.me

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
