// Include gulp
var gulp = require('gulp');

//Plugins
//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

// Concatenate & Minify JS (global)
gulp.task('scripts', function() {
    return gulp.src(['js/vendor/bootstrap.min.js','js/vendor/handlebars-v4.0.2.js','js/vendor/hammer.min.js','js/plugins/mask/jquery.mask.js','js/plugins/owlcarousel/owl.carousel.min.js','js/plugins/scrollbar/jquery.mCustomScrollbar.concat.min.js','js/plugins/scrollbar/jquery.mousewheel.min.js','js/src/config.js','js/src/application.js','js/src/myDillardsBar.js','js/src/intl.js','js/src/modals.js','js/src/carousel.js','js/plugins/bootstrap-touch-carousel/carousel-swipe.js','js/plugins/TouchSwipe-Jquery-Plugin/jquery.touchSwipe.min.js','js/plugins/rtp_pinchzoom/pinchzoom.js','js/plugins/jquery-lazyload/jquery.lazyload.js'])
        .pipe(concat('global.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('global.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});


// OpinionLab
gulp.task('opinionLab', function() {
    return gulp.src(['../onlineopinionV5/oo_conf.js','../onlineopinionV5/oo_conf_invite.js','../onlineopinionV5/oo_conf_inline.js','../onlineopinionV5/oo_conf_tab.js'])
        .pipe(concat('oo.js'))
        .pipe(gulp.dest('../onlineopinionV5'))
        .pipe(rename('oo.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('../onlineopinionV5'));
});

// Minify application.js
gulp.task('applicationJS', function() {
    return gulp.src(['js/src/application.js'])
        .pipe(concat('application.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('application.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify navPages.js
gulp.task('navPagesJS', function() {
    return gulp.src(['js/src/navPages.js'])
        .pipe(concat('navPages.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('navPages.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

//Concatenate & Minify navPages.js
gulp.task('wishListJS', function() {
    return gulp.src(['js/src/wishList.js'])
        .pipe(concat('wishList.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('wishList.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify productDetail.js
gulp.task('productDetailJS', function() {
    return gulp.src(['js/src/productDetail.js'])
        .pipe(concat('productDetail.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('productDetail.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify myAccount.js
gulp.task('myAccountJS', function() {
    return gulp.src(['js/src/myAccount.js'])
        .pipe(concat('myAccount.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('myAccount.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify forgotPassword.js
gulp.task('forgotPasswordJS', function() {
    return gulp.src(['js/src/forgotPassword.js'])
        .pipe(concat('forgotPassword.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('forgotPassword.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify faq.js
gulp.task('faqJS', function() {
    return gulp.src(['js/src/faq.js'])
        .pipe(concat('faq.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('faq.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify eGiftCard.js
gulp.task('eGiftCardJS', function() {
    return gulp.src(['js/src/eGiftCard.js'])
        .pipe(concat('eGiftCard.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('eGiftCard.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify contextChooser.js
gulp.task('contextChooserJS', function() {
    return gulp.src(['js/src/contextChooser.js'])
        .pipe(concat('contextChooser.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('contextChooser.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify contactUs.js
gulp.task('contactUsJS', function() {
    return gulp.src(['js/src/contactUs.js'])
        .pipe(concat('contactUs.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('contactUs.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify chanel.js
gulp.task('chanelJS', function() {
    return gulp.src(['js/src/chanel.js'])
        .pipe(concat('chanel.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('chanel.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

// Concatenate & Minify checkout.js
gulp.task('checkoutJS', function() {
    return gulp.src(['js/src/checkout.js'])
        .pipe(concat('checkout.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('checkout.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});


// Concatenate & Minify catalogRequest.js
gulp.task('catalogRequestJS', function() {
    return gulp.src(['js/src/catalogRequest.js'])
        .pipe(concat('catalogRequest.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('catalogRequest.min.js'))
        .pipe(uglify())
        .on("error", errorAlert)
        .pipe(gulp.dest('js/dist'));
});

//Concatenate & Minify CSS
gulp.task('styles', function () {
    gulp.src(['css/bootstrap.min.css','css/font-awesome.min.css','css/simple-line-icons.css','js/plugins/scrollbar/jquery.mCustomScrollbar.min.css','js/plugins/owlcarousel/assets/owl.carousel.css','js/plugins/owlcarousel/assets/owl.theme.default.min.css','css/base.css','css/pwr/pr_styles_review.css','css/pwr/power-review.css','css/responsive.css','css/ie.css','css/print.css'])
        .pipe(concat('global.css'))
        .pipe(gulp.dest('css/dist'))
        .pipe(rename('global.min.css'))
        .pipe(minifyCSS())
        .on("error", errorAlert)
        .pipe(gulp.dest('css/dist'));
});

//Error handeling 
function errorAlert(err) {
	console.log(err.toString());
	this.emit("end");
}

// Default Task
gulp.task('default', ['scripts','opinionLab','applicationJS','navPagesJS','wishListJS','productDetailJS','myAccountJS','forgotPasswordJS','faqJS','eGiftCardJS','contextChooserJS','contactUsJS','chanelJS','checkoutJS','catalogRequestJS','styles']); 
