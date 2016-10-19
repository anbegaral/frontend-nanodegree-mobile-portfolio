var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var images = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');

gulp.task('jshint', function() {
  gulp.src(['./js/**/*.js', './views/js/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('uglify-concat', function(){
  gulp.src('./js/*.js')
    .pipe(uglify({'mangle': false}))
    .pipe(concat('portfolio.min.js'))
    .pipe(gulp.dest('./dist/js/'));

  gulp.src('./views/js/*.js')
    .pipe(uglify({'mangle': false}))
    .pipe(concat('pizza.min.js'))
    .pipe(gulp.dest('./dist/views/js/'));
});

gulp.task('minify-css', function(){
  gulp.src('./css/*.css')
    .pipe(cleanCss())
    .pipe(concat('portfolio.min.css'))
    .pipe(gulp.dest('./dist/css/'));

  gulp.src('./views/css/*.css')
    .pipe(cleanCss())
    .pipe(concat('pizza.min.css'))
    .pipe(gulp.dest('./dist/views/css/'));
});

gulp.task('copyHtml', function(){
  gulp.src('*.html')
    .pipe(gulp.dest('./dist/'))
  gulp.src('./views/*.html')
    .pipe(gulp.dest('./dist/views/'))
});

gulp.task('imgs', function(){
  gulp.src('./img/**/*.*')
    .pipe(images())
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('images-resize720', function() {
  return gulp.src('./views/images/*.*')
    .pipe(imageResize({ width: 720 }))
    .pipe(images({
      progressive: true
    }))
    .pipe(rename({
      suffix: '_2x'
    }))
    .pipe(gulp.dest('./dist/views/images/'))
});

gulp.task('images-resize100', function() {
  return gulp.src('./views/images/pizzeria.jpg')
    .pipe(imageResize({ width: 100 }))
    .pipe(images({
        progressive:true
    }))
    .pipe(gulp.dest('./dist/views/images/'))
});

gulp.task('watch', function(){
  gulp.watch(['./views/js/**/*.js'], function(){
        gulp.start('jshint');
    });
});

gulp.task('default', ['uglify-concat', 'minify-css', 'copyHtml', 'imgs', 'images-resize100', 'images-resize720']);