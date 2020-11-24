const gulp = require('gulp')

// Globally expose config objects
global.PATHS = require('./path-config').PATHS

require('./tasks/scss')
require('./tasks/clean')
require('./tasks/watch')

gulp.task('build',
  gulp.series(
    'clean:dest',
    'scss:compile',
  ),
);

gulp.task('build:watch',
  gulp.series(
    'build',
    'watch',
  ),
);

gulp.task('default', gulp.series('build:watch'));
