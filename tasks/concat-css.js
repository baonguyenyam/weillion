module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-css', function () {
		return gulp.src([
				// 'bower_components/font-awesome-5/css/all.min.css',
				// 'bower_components/font-awesome/css/font-awesome.min.css',
				// 'bower_components/animate.css/animate.min.css',
				// OWL
				'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
				'bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
				'src/vendors/animate.min.css',
			])
			.pipe($.concat('weilion.css'))
			.pipe(gulp.dest('./dist/css'));
	});
};
