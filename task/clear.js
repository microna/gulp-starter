const del = require("del");

// config
const path = require('../config/path.js')

//clean up
const clear = () => {
    return del(path.root)
}


module.exports = clear;