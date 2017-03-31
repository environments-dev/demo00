var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('js', function() {
    console.log('js se ejecutó');
});

gulp.task('js-min', ['js'], function() {
    console.log('js-min se ejecutó');
});

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        port: '7070',
        livereload: true
    });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);
