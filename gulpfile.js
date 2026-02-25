const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass() {
    return gulp.src('./Front-End/modulo16/aula/source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed' // não é mais outputStyle
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./Front-End/modulo16/aula/build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log("Executando via Gulp");
        callback();
    }, 2000);
}

function dizOi(callback) {
    setTimeout(function(){
        console.log("Olá Gulp");
        dizTchau();
        callback();
    }, 1000);
}

// tarefa privada
function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./Front-End/modulo16/aula/source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}