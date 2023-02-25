const gulp = require('gulp');
var concat = require('gulp-concat');
const minify = require('gulp-minify');
module.exports = (gulp, config) => {
// Copy Font Awesome files to Pattern Lab assets directory
  gulp.task('concat', function () {
    return gulp.src(config.js.source)
      .pipe(concat('global.js','',))
      .pipe(minify())
      .pipe(gulp.dest(config.js.destination));
  });
}
