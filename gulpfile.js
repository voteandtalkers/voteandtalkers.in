var gulp = require('gulp'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    stylus = require('gulp-stylus'),
    csso = require('gulp-csso'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');

/**
 * Default Task
 * run all tasks for development
 * >> List
 * @task: watch
 * @task: stylus
 * @task: csso
 * @task: jshint
 */
gulp.task('default', function () {
    gulp.src('./development/public/stylus/*.styl', { read: false })
        .pipe(watch())
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('./development/public/stylesheets'))
        .pipe(livereload());

    gulp.src('./development/public/stylesheets/**/*.*', { read: false })
        .pipe(watch())
        .pipe(plumber())
        .pipe(csso())
        .pipe(gulp.dest('./development/public/stylesheets'))
        .pipe(livereload());

    gulp.src('./development/views/**/*.*')
        .pipe(watch())
        .pipe(plumber())
        .pipe(livereload());

    gulp.src('./development/public/javascripts/*.js')
        .pipe(watch())
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

/**
 * Image optimization task
 */
gulp.task('images', function () {
    gulp.src('./development/public/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./development/public/images'));
});

/**
 * Stylus compile task
 */
gulp.task('stylus', function () {
    gulp.src('./development/public/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./development/public/stylesheets'));
});

/**
 * CSS Minify task
 */
gulp.task('csso', function () {
    gulp.src('./development/public/stylesheets/**/*.*')
    .pipe(csso())
    .pipe(gulp.dest('./development/public/stylesheets'));
});

/**
 * JS Lint tastk
 */
gulp.task('jshint', function() {
  gulp.src('./development/public/javascripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/**
 * Folders and files clean task
 */
gulp.task('clean', function(){
  return gulp.src(['production', 'test'], {read:false})
  .pipe(clean());
});

/**
 * Build and Deploy Task
 */
gulp.task('build',['clean'], function(){
  var copyBeforeBuild = [
        '**/controllers/**'
    ,   '**/helpers/**'
    ,   '**/models/**'
    ,   '**/routes/**'
    ,   '**/views/**'
    ,   '**/voteandtalkers.js'
  ];
  gulp.src(copyBeforeBuild, { cwd: './development/' })
  .pipe(gulp.dest('production'));
});