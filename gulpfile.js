var gulp = require('gulp'),
    // stylus = require('gulp-stylus'),
    // tap = require('gulp-tap'),
    // nocache = require('gulp-nocache'),
    // minifyCss = require('gulp-clean-css'),
    // uglify = require('gulp-uglify'),
    sequence = require('gulp-sequence'),
    _ = require('lodash'),
    tasks = require('kpc/src/tasks/tasks');

tasks.paths.css.push('./vdt/**/*.@(css|styl)');
_.extend(tasks.paths, {
    tpl: './vdt/index.html',
    other: [],

    dest: './'
});
tasks.nocacheConf.outputContext = './';

// 覆盖一些用不到的任务
gulp.task('config', _.noop);
gulp.task('node_modules:copy', _.noop);

// gulp.task('build:tpl', function() {
    // return gulp.src(tasks.paths.tpl)
        // .pipe()
// })
