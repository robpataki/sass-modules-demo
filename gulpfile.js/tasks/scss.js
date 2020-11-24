/* global PATHS */

const gulp = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('sass')

gulp.task('scss:compile', () => {
  return gulp.src(`${PATHS.src.root}/**/*.scss`)
    .pipe(sass({
      includePaths: ['node_modules', PATHS.src.root],
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(gulp.dest(PATHS.dist.stylesheets));
});
