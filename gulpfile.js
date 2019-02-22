var gulp = require('gulp');
var connect = require('gulp-connect');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var data = require('gulp-data');

gulp.task('hbs', () => {
    let options = {
        batch : ['./src/hbs/partials'],
        helpers : {
            customEach : (context,options) => {
                let data = ``;

                context.forEach(element => {
                    data += options.fn(element);
                });

                return data;
            }
        }
    }
    return gulp.src(`src/hbs/*.hbs`)
    .pipe(data((file) => {
        return require('./src/data/cast.json');
    }))
    .pipe(handlebars({},options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(`src/html`))
})

gulp.task('connect', function(){
    connect.server();
});

gulp.task('default', ['hbs','connect']);
