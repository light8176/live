var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var defaultsDeep = require('merge-defaults');
var webpackConfig = require('./webpack.config');


// for development
gulp.task("webpack", function() {
  return gulp.src('./')
    .pipe(gulpWebpack(webpackConfig))
    .pipe(gulp.dest('./src/public/js'));
});

// for development
gulp.task("webpack:watch", function() {
  return gulp.src('./')
    .pipe(gulpWebpack(defaultsDeep({
        watch: true,
        devtool: '#inline-source-map'
      }, webpackConfig)))
    .pipe(gulp.dest('./src/public/js'));
});