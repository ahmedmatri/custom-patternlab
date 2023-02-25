const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

module.exports = (gulp, config) => {
// Copy Font Awesome files to Pattern Lab assets directory
  gulp.task('minify', () => {
    return gulp.src('dist/components/global.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/components/'));
  });
}


