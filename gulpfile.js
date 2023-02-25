const gulp = require('gulp');

const config = require('./gulp-tasks/config');
gulp.task('fonts', function () {
  return gulp.src(config.fonts.source)
    .pipe(gulp.dest(config.fonts.destination));
});
const tasks = [
  'clean',
  'fonts',
  'bootstrap',
  'scss',
  'jquery',
  'slick',
  'js',
  'concat',
  'minify',
  'svg',
  'lint',
  'images',
  'inject',
  'patternlab',
  'default',
  'watch',
];

// const webpack = require('webpack-stream');
// gulp.task('default', function () {
//   return gulp
//     .src('components/custom.js')
//     .pipe(
//       webpack({
//         // Any configuration options...
//       })
//     )
//     .pipe(gulp.dest('dist/js'));
// });

tasks.forEach((task) => {
  const t = require(`./gulp-tasks/${task}`);
  t(gulp, config);
});
