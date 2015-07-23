var gulp = require('gulp');

gulp.task('default', function(){
  return gulp.src('public/javascripts/*.js')
  .pipe(gulp.dest('tmp/js'));
});