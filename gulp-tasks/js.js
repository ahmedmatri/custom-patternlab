const gulp = require('gulp');

module.exports = (gulp, config) => {
// to delete
  gulp.task('js', function () {
    return gulp.src(config.js.source)
      .pipe(gulp.dest(config.js.destination));
  });
}
