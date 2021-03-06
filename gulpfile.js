var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    slim = require("gulp-slim"),
    imagemin = require('gulp-imagemin'),
    bower = require('gulp-bower'),
    pngquant = require('imagemin-pngquant'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    mozjpeg = require('imagemin-mozjpeg'),
    image = require('gulp-image');

var sassSources = ['development/css/*.sass'];
var imageSources = ['development/images/*'];
var isotopeSources = ['development/images/isotope/*'];
var spritesSources = ['development/images/sprites/*'];
var slimSources = ['development/*.slim']

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});


gulp.task('connect', function() {
  connect.server({
    root: 'production/',
    livereload: true
    });
  });


gulp.task('sass', function () {
  gulp.src(sassSources)
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }))
     .on('error', gutil.log)
    .pipe(gulp.dest('production/css'))
    .pipe(connect.reload())
});

gulp.task('slim', function(){
  gulp.src("development/*.slim")
    .pipe(slim({
      pretty: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest("production/"))
    .pipe(connect.reload())
});

gulp.task('imagesMin', function () {
    return gulp.src(imageSources)
        .pipe(image())
        .pipe(gulp.dest('production/images'))
        .pipe(connect.reload())
});

gulp.task('imagesMin-sprites', function () {
    return gulp.src(spritesSources)
        .pipe(image())
        .pipe(gulp.dest('production/images/sprites'))
        .pipe(connect.reload())
});

gulp.task('imagesMin-isotope', function () {
    return gulp.src(isotopeSources)
        .pipe(image())
        .pipe(gulp.dest('production/images/isotope'))
        .pipe(connect.reload())
});


gulp.task('watch', function() {
  gulp.watch(sassSources, ['sass']);
  gulp.watch(slimSources, ['slim']);
  gulp.watch('development/images/*', ['imagesMin'], ['imagesMin-sprites'], ['imagesMin-isotope']);
});


gulp.task('default', ['watch', 'imagesMin', 'sass', 'slim', 'connect', 'imagesMin-sprites', 'imagesMin-isotope']);

