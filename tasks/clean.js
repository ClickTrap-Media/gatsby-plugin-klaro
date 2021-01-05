const gulp = require("gulp");
const del = require("del");

// Delete js and typing files from project root
// (and explcitly preserve our configuration files)
function clean() {
    return del([
        "*.js",
        "*.d.ts",
        "!commitlint.config.js",
        "!gulpfile.js",
        "!jest.config.js"
    ]);
};

module.exports.clean = clean;
