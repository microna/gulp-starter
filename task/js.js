const {src, dest} =  require('gulp');

// config
const path =  require('../config/path.js')
const app =  require('../config/app.js')


// plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');




// js flow
const js =  () => {
    return src(path.js.src, {sourcemaps: true})
    .pipe(plumber({
        errorHandler : notify.onError(error => ({
            title : 'js',
            message : error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(uglify())
    .pipe(dest(path.js.dest, {sourcemaps: true}))
}



module.exports = js;