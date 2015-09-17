var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    slim = require("gulp-slim"),
    imagemin = require('gulp-imagemin'),
    bower = require('gulp-bower'),
    pngquant = require('imagemin-pngquant'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

var sassSources = ['development/css/styles.sass', 'development/css/bootstrap.scss'];
var imageSources = ['development/images/*'];
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
     .pipe(concat('styles.css'))
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
    return gulp.src('development/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('production/images'))
        .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(sassSources, ['sass']);
  gulp.watch(slimSources, ['slim']);
  gulp.watch('development/images/*', ['imagesMin']);
});


gulp.task('default', ['watch', 'imagesMin', 'sass', 'slim', 'connect']);
