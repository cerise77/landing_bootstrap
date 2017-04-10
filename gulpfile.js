var gulp = require('gulp');
var sass = require('gulp-sass'); // подключаем gulp-sass
var prefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var rigger = require('gulp-rigger');
var path = {
    build: {
        html: 'public/',
        css: 'public/css/',
    },
    src: {
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        style: 'src/scss/main.scss',
    }
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        //.pipe(sourcemaps.init())
        .pipe(sass({ //Скомпилируем
            includePaths: ['./src/scss'],
            outputStyle: 'compressed',
            errLogToConsole: true
        }))
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(path.build.css));
});

gulp.task('build', [
    'style:build',
    'html:build',
]);
