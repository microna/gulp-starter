const {watch, series, parallel} = require('gulp')
const browserSync = require('browser-sync').create();


// config
const path = require('./config/path.js')


// tasks
const clear = require('./task/clear.js')
const html = require('./task/html.js')
const scss = require('./task/scss.js')
const js = require('./task/js.js')

// server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

// watch
const watcher = () =>{
    watch(path.html.watch, html).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
}



exports.html = html;
// exports.watch = watcher;
// exports.clear = clear;
exports.scss =  scss
exports.js =  js

exports.dev = series(
    clear,
    parallel(html,scss,js), 
    parallel(watcher, server)
);