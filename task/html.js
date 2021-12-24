const {src, dest} = require('gulp')


// plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");

// config
const path = require('../config/path.js')
const app = require('../config/app.js')


const html = () => {
    return src(path.html.src)
      .pipe(plumber())
      .pipe(fileInclude())
      .pipe(size({title: 'Before'}))
      .pipe(htmlmin(app.htmlmin))
      .pipe(size({title: 'After'}))
      .pipe(dest(path.html.dest)) 
  }


  module.exports = html;