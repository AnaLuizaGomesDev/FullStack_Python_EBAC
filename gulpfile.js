const gulp = require('gulp');

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