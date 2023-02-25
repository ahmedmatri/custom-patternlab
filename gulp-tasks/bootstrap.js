const gulp = require('gulp');

module.exports = (gulp, config) => {
// Copy Font Awesome files to Pattern Lab assets directory
  gulp.task('bootstrap', function () {
    return gulp.src(config.bootstrap.source)
      .pipe(gulp.dest(config.bootstrap.destination));
  });
}
