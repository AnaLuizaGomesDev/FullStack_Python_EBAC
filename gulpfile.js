const gulp = require('gulp');

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá Gulp");
    dizTchau();
    callback();
}

// tarefa privada
function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;