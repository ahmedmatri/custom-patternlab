module.exports = (gulp, config) => {
  gulp.task('watch:scss', () => {
    gulp.watch(
      ...config.scss.all,
      gulp.series('lint:stylelint', 'scss', 'inject:css'),
    );
  });

  gulp.task('watch:js', () => {
    gulp.watch(
      ...config.js.source,
      gulp.series('concat','inject:js'),
    );
  });

  gulp.task('watch', gulp.series('default', gulp.parallel('pl:serve', 'watch:scss', 'watch:js')));
};
