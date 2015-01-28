var coffee, gulp, jade;

gulp = require('gulp');

coffee = require('gulp-coffee');

jade = require('gulp-jade');

gulp.task('jade', function() {
  return gulp.src(['index.jade']).pipe(jade()).pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  return gulp.watch(['*.jade'], ['jade'])
});
