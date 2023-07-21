var gulp = require('gulp');
    autoprefixer = require('gulp-autoprefixer');
    


gulp.task('styles', function () {
    return gulp.src('css/styles.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'))
});


gulp.task('watch', function() {
    gulp.watch('css/styles.css', gulp.series('styles'));
});