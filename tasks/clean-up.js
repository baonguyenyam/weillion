module.exports = function (gulp, $, browserSync) {
	gulp.task('clean-up', function () {
		return gulp.src([
			'./dist/css/*.map',
			'./dist/css/*.css',
			'!./dist/css/*.min.css',
			'./dist/js/*.map',
			'./dist/js/*.js',
			'!./dist/js/*.min.js',
		], {read: false, allowEmpty: true })
			.pipe($.clean({force: true}));
	});
};
