'use strict';
module.exports = {    
    startCron: function (req, res) {
        res.send({"time":Math.trunc(Date.now() / 1000)});
    }
}