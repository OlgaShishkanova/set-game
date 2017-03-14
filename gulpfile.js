var gulp = require('gulp');
var sass = require('gulp-sass');
//var cleanCSS = require('gulp-clean-css');

var cssPath = '*.sass';

gulp.task('sass',
    function() {
        return gulp.src(cssPath)
            .pipe(sass())
            //.pipe(cleanCSS({ compatibility: 'ie8' }))
            .pipe(gulp.dest(''));
    });

gulp.task('watcher', function () {
    gulp.watch(cssPath, ['sass']);
});