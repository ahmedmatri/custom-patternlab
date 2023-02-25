const stylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint-new');
const gulpIf = require('gulp-if');
const typescript = require('gulp-typescript');
const ts = typescript.createProject('tsconfig.json', { noEmit: true });

module.exports = (gulp, config) => {
  gulp.task('lint:stylelint', () =>
    gulp.src(config.scss.all).pipe(stylelint(config.stylelint.options)),
  );

  gulp.task(
    'lint',
    gulp.series(
      gulp.parallel('lint:stylelint'),
    ),
  );
};
