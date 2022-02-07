module.exports = function (gulp, $, browserSync) {
	gulp.task('tao-js-dev', function () {
		return gulp.src([
				'./src/scripts/_core/*.js',
				'./src/scripts/*.js',
				'!./src/scripts/dev.js'
			])
			.pipe($.sourcemaps.init())
			.pipe($.concat('app.js'))
			.pipe($.babel())
			.pipe($.sourcemaps.write(''))
			.pipe(gulp.dest('./dist/js'));
	});
};
