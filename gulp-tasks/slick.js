const gulp = require('gulp');

module.exports = (gulp, config) => {
// Copy Font Awesome files to Pattern Lab assets directory
  gulp.task('slick', function () {
    return gulp.src(config.slick.source)
      .pipe(gulp.dest(config.slick.destination));
  });
}
