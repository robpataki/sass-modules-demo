/* global PATHS */

const gulp = require('gulp')

gulp.task('watch', (done) => {
  gulp.watch(`${PATHS.src.root}/**/*.scss`, gulp.series('scss:compile'));
  done();
});
