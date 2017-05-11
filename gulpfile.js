var gulp = require('gulp');
var sequence = require('run-sequence');

require('./task/webpack');
require('./task/clean');

gulp.task('dev', function () {
  return sequence('clean','webpack')
})

gulp.task('watch', function(){
	return sequence('webpack:watch')
})
gulp.task('default', ['dev'])