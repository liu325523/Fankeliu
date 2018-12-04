
/*
src() 源文件路径 参数可以是一个数组
dest（）目标文件路径 dest参数中的文件夹名称可以自动创建
pipe（）管道 ，表示输送，就是下一步 
 
 */


// // es6-->es5
// let babel = require('gulp-babel');
// gulp.task('es6',function(){
//   gulp.src('./src/js/*.js')
//   .pipe(babel({
//     'presets':['es2015']
//   }))
//   .pipe(gulp.dest('./src/js/es5/'))
// });

//2.布置任务：压缩css文件
var gulp=require('gulp');
// 压缩css并重命名css
// var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
gulp.task('compressA',function(){
 return gulp.src('src/js/ES5/*.js')
       .pipe(uglify())
    // .pipe(rename(
    //   '.min.js'))
  // 输出到构建目录
      .pipe(gulp.dest('dist/.js'));

  
});

// gulp.task('cssmin',function(){
//   return gulp.src('src/css/*.css')
//        .pipe(cssmin())
//     // .pipe(rename(
//     //   '.min.js'))
//   // 输出到构建目录
//       .pipe(gulp.dest('dist/css'))
// });
// let imagemin = require('gulp-imagemin');
// gulp.task('imagemin1',function(){
//   return gulp.src('src/img/datail/*')
//        .pipe(imagemin())
//     // .pipe(rename(
//     //   '.min.js'))
//   // 输出到构建目录
//       .pipe(gulp.dest('dist/img'))
// });

// gulp.task('goodlistimg',function(){
//   return gulp.src('src/img/goodlist/*')
//        .pipe(imagemin())
//     // .pipe(rename(
//     //   '.min.js'))
//   // 输出到构建目录
//       .pipe(gulp.dest('dist/img'))
// });
// // 注册页没有压缩完成
// gulp.task('registimg',function(){
//   return gulp.src('src/img/regist/*')
//        .pipe(imagemin())
//     // .pipe(rename(
//     //   '.min.js'))
//   // 输出到构建目录
//       .pipe(gulp.dest('dist/img'))
// });
// let shopcarimg = require('gulp-imagemin');
// // 登录页页没有压缩完成
// gulp.task('shopcarimg',function(){
//   return gulp.src('src/img/shopcarimg/*')
//        .pipe(imagemin())
//     // .pipe(rename(
//     //   '.min.js'))
//   // 输出到构建目录
//       .pipe(gulp.dest('dist/img'))
// });

// gulp.task('img',function(){
//   return gulp.src('src/img/*.jpg')
//        .pipe(imagemin())
//     // .pipe(rename(
//     //   '.min.js'))
//   // 输出到构建目录
//       .pipe(gulp.dest('dist/img'))
// });
// gulp.task('png',function(){
//   return gulp.src('src/img/*.{png,gif,ico}')
//        .pipe(imagemin())
    
//   // 输出到构建目录
//       .pipe(gulp.dest('dist/img'))
// });