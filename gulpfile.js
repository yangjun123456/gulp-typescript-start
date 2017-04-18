var gulp = require('gulp'),
    connect = require('gulp-connect'),
    ts = require("gulp-typescript"),
    tsProject = ts.createProject('tsconfig.json'),
    uglify = require('gulp-uglify');

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8005,
        livereload: true
    })
});

gulp.task("ts", function() {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(tsProject()); //按照tsconfig进行编译

    return tsResult.js.pipe(gulp.dest('dist/'));
});

gulp.task('html', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.ts', ['ts']);
});

gulp.task('build', ['html', 'ts'])
gulp.task('default', ['connect', 'watch'])