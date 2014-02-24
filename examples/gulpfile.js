var gulp = require('gulp');
var gparser = require('../');

gulp.task('normal', function () {
  gulp.src('src/normal.html')
    .pipe(gparser())
    .pipe(gulp.dest('./out'));
});

gulp.task('ext', function () {
  gulp.src('src/ext.html')
    .pipe(gparser({ext: '.js'}))
    .pipe(gulp.dest('./out'));
});


gulp.task('default', ['normal']);