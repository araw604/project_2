'use strict';
var gulp = require('gulp'); // Load Gulp!
var browserSync = require('browser-sync').create();

gulp.task('scss', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  
    gulp.watch(["index.html", "*.js", "*.css"]).on('change', browserSync.reload);
});