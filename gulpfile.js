var gulp = require('gulp');
var connect = require('gulp-connect');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var data = require('gulp-data');

gulp.task('hbs', () => { 
    return gulp.src(`src/hbs/*.hbs`)
    .pipe(data((file) => {
        return require('./src/data/cast.json');
    }))
    .pipe(handlebars())
    .pipe(rename('index.html'))
    .pipe(gulp.dest(`src/html`))
})

gulp.task('connect', function(){
    connect.server();
});

gulp.task('default', ['hbs','connect']);
