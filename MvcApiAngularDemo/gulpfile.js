/// <binding BeforeBuild='default' ProjectOpened='watch, build:dev' />
const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build:dev', gulp.series('partials', gulp.parallel('other', 'webpack:dev')));
gulp.task('build', gulp.series('partials', gulp.parallel('other', 'webpack:dist')));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean:dist', 'build'));
gulp.task('watch', watch);

//function watch(done) {
//  gulp.watch(conf.path.src('**/*.html'), browserSync.reload);
//  done();
//}

function watch(done) {
    gulp.watch([conf.path.src('**/*.js'), conf.path.src('**/*.html')], gulp.series('clean:dev', 'build:dev'));
    done();
}
