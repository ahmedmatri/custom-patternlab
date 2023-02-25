const gulp = require('gulp');

module.exports = (gulp, config) => {
// Copy Font Awesome files to Pattern Lab assets directory
  gulp.task('jquery', function () {
    return gulp.src(config.jquery.source)
      .pipe(gulp.dest(config.jquery.destination));
  });
}
