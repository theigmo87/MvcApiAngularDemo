const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('clean:dev', cleanDev);
gulp.task('clean:dist', cleanDist);
gulp.task('other', other);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function cleanDev() {
    return del([conf.paths.tmp]);
}

function cleanDist() {
    return del([conf.paths.dist]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{html,css,js,scss}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
