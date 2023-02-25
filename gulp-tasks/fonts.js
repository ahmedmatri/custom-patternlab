const gulp = require('gulp');

module.exports = (gulp, config) => {
// Copy Font Awesome files to Pattern Lab assets directory
  gulp.task('fonts', function () {
    return gulp.src(config.fonts.source)
      .pipe(gulp.dest(config.fonts.destination));
  });
}

