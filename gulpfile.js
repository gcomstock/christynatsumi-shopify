require('dotenv').load();
var gulp = require('gulp');
var gss = require('gulp-shopify-sass');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var gulpShopify = require('gulp-shopify-upload');
var merge = require('merge-stream');
var minify = require('gulp-minify');
var jsFile = '';


gulp.task('node_modules-copy', function() {
  var minified = [
    "./node_modules/jquery-validation/dist/jquery.validate.min.js",
    "./node_modules/lazysizes/lazysizes.min.js"
  ];
  var unminified = [
    "./node_modules/jquery-validation/dist/additional-methods.js"
  ];
  
  var minifiedStream = gulp.src(minified);
  var unminifiedStream = gulp.src(unminified)
    .pipe(minify({ 
      noSource: true, 
      ext: { min: '.min.js' }
    }));

  return merge(minifiedStream, unminifiedStream)
    .pipe(gulp.dest('./assets'));
});

gulp.task('js-clean', function() {
  return gulp.src('./assets/' + jsFile, {read: false})
    .pipe(clean());
});

gulp.task('js-push', function() {
  return gulp.src('./lib/scripts/' + jsFile)
    .pipe(gulp.dest('./assets'));
});

gulp.task('js', ['js-clean', 'js-push']);

gulp.task('shopify', function() {
  gulp.watch('./lib/scripts/**/*.js', function(event) {
    jsFile = event.path.substr(event.path.lastIndexOf('/') + 1);
    gulp.start('js');
  });

  return watch('./+(assets|layout|config|snippets|sections|templates|locales)/**')
    .pipe(gulpShopify(process.env.API_KEY, process.env.PASSWORD, process.env.STORE, process.env.DEV_ID));
});