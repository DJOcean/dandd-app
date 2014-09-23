/* jshint globalstrict:true */

'use strict';

// gulp plugins
var gulp       = require('gulp'),
  scsslint     = require('gulp-scss-lint'),
  sass         = require('gulp-sass')

var exitOnError = !!gulp.env['exit-on-error'];

gulp.task('default', function() {
 gulp.run('lint-scss', 'styles');
});

gulp.task('lint-scss', function() {
  gulp.src('./public/styles/**/*.scss')
    .pipe(scsslint())
});

gulp.task('styles', function() {
	gulp.src('./public/styles/**/*.scss')
   		.pipe(sass())
   		.pipe(gulp.dest('./public/styles'));
});


