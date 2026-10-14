const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function styles(){
    return gulp.src('./src/styles/**/*.scss')
    .pipe(sass({style: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function scripts() {
    return gulp.src([
        './src/scripts/components/*.js', 
        './src/scripts/main.js'         
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function(){
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/**/*.js', gulp.parallel(scripts))
}