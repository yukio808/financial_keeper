var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var refresh = require('gulp-livereload');
var livereloadport = 38567;

gulp.task('server', function (){
  nodemon({script : './app/server.js'})
    .on('restart', function (){
      console.log('This application is restarting on port ' + livereloadport)
      setTimeout( function (){
        console.log('This application has restarted on port ' + livereloadport)
        refresh.changed('./app/server.js');
      }, 1000);
    });
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass( { errLogToConsole : true } ))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function (){
  refresh.listen(livereloadport);
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch([
    './public/**/*',
    './app/views/*.jade',
    './app/controller/*.js'], refresh.changed);
});


gulp.task('default', ['server', 'watch', 'sass']);
gulp.task('sassCompile', ['sass']);
