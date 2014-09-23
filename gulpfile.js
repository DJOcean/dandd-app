/* jshint globalstrict:true */

'use strict';

// gulp plugins
var gulp       = require('gulp'),
  scsslint     = require('gulp-scss-lint')

var exitOnError = !!gulp.env['exit-on-error'];

gulp.task('default', function() {
  gulp.src('./public/styles/**/*.scss')
    .pipe(scsslint())
});

gulp.task('lint-scss', function() {
  gulp.src('./public/styles/**/*.scss')
    .pipe(scsslint())

});

