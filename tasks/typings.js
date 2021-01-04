const gulp = require("gulp");

// Copy typings from typings directory to root directory
function typings() {
    return gulp.src('./typings/**/*.d.ts')
        .pipe(gulp.dest('./'));
};

module.exports.typings = typings;
