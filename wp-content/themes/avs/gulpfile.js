var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    less = require('gulp-less'),
    path = require('path'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    filesize = require('gulp-filesize'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    order = require('gulp-order'),
    sourcemaps = require('gulp-sourcemaps'),
    usemin = require('gulp-usemin'),
    del = require('del'),
    replace = require('gulp-replace');

var mainBowerFiles = require('main-bower-files'),
    filter = require('gulp-filter'),
    uglify = require('gulp-uglify');

var cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin');

var config = require('./gulp-config.json');

//add clean tasks
gulp.task('clean:css', function (cb) {
    del.sync(['./dist/css/main.css']);
    cb(null);
});

gulp.task('clean:css_vendor', function (cb) {
    del.sync(['./dist/css/vendor.css']);
    cb(null);
});

gulp.task('clean:js', function (cb) {
    del.sync(['./dist/js/main.js']);
    cb(null);
});

gulp.task('clean:js_vendor', function (cb) {
    del.sync(['./dist/js/vendor.js']);
    cb(null);
});
gulp.task('clean:fonts', function (cb) {
    del.sync(['./dist/fonts/**']);
    cb(null);
});

gulp.task('clean', function (cb) {
    del.sync(['./dist/**']);
    cb(null);
});

// Compile and minify all less files under the less folder and send them to css folder.
// main.min.css
gulp.task('less', ['clean:css'], function (cb) {

    var lessFiles = [
        './assets/less/main.less'
    ];

    return gulp.src(lessFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(less({
            paths: [path.join(__dirname, 'less')]
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie >= 11', 'safari >= 8', 'chrome >= 56', 'firefox >= 50'],
            cascade: false
        }))
        .pipe(cleanCSS({debug: true}, function (details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(filesize())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
        .pipe(notify({message: "Style compressed", onLast: true}));
});

// Compile all js in javascript folder and send it to js folder.
// main.min.js
gulp.task('js', ['clean:js'], function () {

    var jsFiles = [
        './assets/js/**/*.js',
    ];

    gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(filesize())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream())
        .pipe(notify({message: "Javascript is uglyfied", onLast: true}));

});

// Compile all js registered in bower.json file and send to js folder too.
// vendor.min.js
gulp.task('vendor_js', ['clean:js'], function () {

    var jsFiles = [
        './vendor/chosen/chosen.jquery.js',
        './vendor/slick-carousel/slick/slick.js'
    ];

    gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(filter('**/*.js', {restore: true}))
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(filesize())
        .pipe(sourcemaps.write('maps'))
        .pipe(plumber.stop())
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({message: "Vendor js is successfully compressed", onLast: true}));
});

// Compile all css registered in bower.json file and send to js folder too.
// vendor.min.css
gulp.task('vendor_css', ['clean:css'], function () {
    var cssFiles = [
        "./vendor/chosen/chosen.css",
        "./vendor/slick-carousel/slick/slick.css"
    ];


    gulp.src(cssFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.css'))
        .pipe(cleanCSS({debug: true}, function (details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        // .pipe(rename({suffix: '.min'}))
        .pipe(filesize())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
        .pipe(notify({message: "Vendor CSS compressed", onLast: true}));
});

// Compress fonts and send to fonts folder.
gulp.task('fonts', ['clean:fonts'], function () {

    var fonts = [
        './assets/fonts/**/*'
    ];

    return gulp.src(fonts)
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(notify({message: "Fonts are compressed", onLast: true}));

});

// Images - Compress images and send to dist/img //
gulp.task('img', function () {
    var assets = [
        './assets/img/**/*'
    ];
    return gulp.src(assets)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true, max: 80}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('./dist/img'))
        .pipe(notify({
            message: "Images Compressed",
            onLast: true
        }));
});

// Vendor-Duplicate - duplicate vendor files and send to dist/js //
gulp.task('vendor_duplicate', function () {
    var copiedJSFiles = [

    ];
    return gulp.src(copiedJSFiles)
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({
            message: "Vendor js is successfully copied",
            onLast: true
        }));
});

// Vendor-Assets - compress images and send to dist/img
gulp.task('vendor_assets', function () {
    var assets = [];
    return gulp.src(assets)
        .pipe(gulp.dest('./dist/img'))
        .pipe(notify({
            message: "Vendor Assets Duplicated",
            onLast: true
        }));
});

gulp.task('assetVersion', function () {
    var date = new Date();
    var buildVersion = date.getDate() + '' + date.getMonth() + '' + date.getFullYear() + '' + date.getHours() + '' + date.getMinutes();

    gulp.src(['./views/base.twig'])
        .pipe(replace(/(set assetVersion = '\d*\')/g, 'set assetVersion = \'' + buildVersion + '\''))
        .pipe(gulp.dest('./views', {'overwrite': true}))
        .pipe(notify({message: "Assets versioned!", onLast: true}));
});

// Watch all tasks and generate synced browser with the updated changes.
gulp.task('watch', [], function () {
    browserSync.init({
        proxy: config.proxy,
        open: true,
        ghostMode: true,
        logPrefix: config.logPrefix,
        snippetOptions: {
            whitelist: [],
            blacklist: []
        }
    });
    gulp.watch('./assets/less/**/*.less', ['clean:css', 'less', 'vendor_css']);
    gulp.watch('./assets/js/**/*.js', ['clean:js', 'js', 'vendor_js']);
    gulp.watch(['*.php', '*.twig'], browserSync.reload);
    gulp.watch(['./assets/fonts/**/*'], ['clean:fonts', 'fonts']);
    gulp.watch(['./assets/img/**/*'], ['img']);
    gulp.watch(['./vendor/**/*'], ['vendor_js', 'vendor_css', 'vendor_assets', 'vendor_duplicate']);
});

// Type gulp 'dev or vendor' or just gulp in the terminal to run the tasks
gulp.task('dev', ['clean', 'js', 'less', 'img', 'watch']);
gulp.task('vendor', ['clean', 'vendor_js', 'vendor_css', 'vendor_assets', 'vendor_duplicate']);
gulp.task('default', ['clean', 'vendor_js', 'vendor_css', 'vendor_assets', 'vendor_duplicate', 'js', 'less', 'fonts', 'img', 'assetVersion']);
