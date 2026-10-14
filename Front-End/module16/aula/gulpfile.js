const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./Front-End/modulo16/aula/source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./Front-End/modulo16/aula/build/images'))
}

function comprimeJavaScript(){
    return gulp.src('./Front-End/modulo16/aula/source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./Front-End/modulo16/aula/build/scripts'))
}

function compilaSass() {
    return gulp.src('./Front-End/modulo16/aula/source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed' // não é mais outputStyle
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./Front-End/modulo16/aula/build/styles'));
}

exports.default = function() {
    gulp.watch('./Front-End/modulo16/aula/source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./Front-End/modulo16/aula/source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./Front-End/modulo16/aula/source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}
