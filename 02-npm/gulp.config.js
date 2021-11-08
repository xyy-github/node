const {
    src,
    dest
} = require('gulp')

function scripts() {
    return src('./demos/01-buildings/app.js', {
            sourcemaps: true
        })
        .pipe(dest('./demos/dist/'));
}

var build = gulp.series(scripts);

exports.default = build