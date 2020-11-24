/* global PATHS */

const gulp = require('gulp')
const del = require('del')

gulp.task('clean:dest', (done) => {
  del.sync(`${PATHS.dist.root}/*`);
  done();
});
