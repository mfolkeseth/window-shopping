var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('default', ['sass', 'js']);

gulp.task('js', function() {
  return gulp.src([
      'node_modules/angular/angular.js',
      'node_modules/ngstorage/ngStorage.js',
      'node_modules/jquery/dist/jquery.js',
      'app/js/**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'))
});

gulp.task('sass', function() {
  return gulp.src('app/assets/scss/default.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/assets/scss/**/*.scss', ['sass'])
});
