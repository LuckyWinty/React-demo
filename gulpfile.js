var gulp = require('gulp');
var browserify=require('browserify');//处理依赖，也就是把require的模块加载
var source=require('vinyl-source-stream');
var reactify=require('reactify');

gulp.task('jsx', function() {
	browserify({
		entries: ['./jsx/commentBox.jsx'],
		transform: [reactify]                   //转换
	})
		.bundle()            //打包，是browerify的一个函数，就是把多个文件打包成一个文件，打包完毕就会生成一个js
		.pipe(source('commentBox.js'))   //因为browerify的输入不能直接作为gulp的输入，所以要用source()来处理
		.pipe(gulp.dest('./js/'));        // 写入到最终的文件夹
});

gulp.task('default', ['jsx']);     //为gulp设置默认任务