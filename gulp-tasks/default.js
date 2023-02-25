module.exports = (gulp) =>
  gulp.task(
    'default',
    gulp.series(
      'clean', 'bootstrap', 'fonts',
      gulp.parallel('scss', 'svg', 'lint', 'images','jquery','slick'),
      'concat',
      'minify',
      'inject',
      'pl:build',
    ),
  );
