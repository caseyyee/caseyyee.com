const gulp = require("gulp");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const order = require('gulp-order');

/*
 Uglify our javascript files into one.
 Use pump to expose errors more usefully.
*/
gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(order([
      'src/js/perlin.js',
      'src/js/three.min.js',
      'src/js/script.js'
    ], { base: __dirname }))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/_includes/js'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', gulp.parallel('js'));
});

/*
  Let's build.
*/
gulp.task('build', gulp.parallel(
  'js'
));