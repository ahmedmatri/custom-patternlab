module.exports = (gulp, config) => {
  gulp.task('watch:scss', () => {
    gulp.watch(
      ...config.scss.all,
      gulp.series('lint:stylelint', 'scss', 'inject:css'),
    );
  });

  gulp.task('watch:ts', () => {
    gulp.watch(
      ...config.ts.source,
      gulp.series('lint:eslint', 'ts', 'inject:js'),
    );
  });

  gulp.task('watch', gulp.series('default', gulp.parallel('pl:serve', 'watch:scss', 'watch:ts')));
};
