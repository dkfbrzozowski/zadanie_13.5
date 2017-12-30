var os = require('os');

function getTime() {
    let uptime = Math.floor(os.uptime());
    let hours = Math.floor(uptime / 3600);
    let minutes = Math.floor((uptime - (hours * 3600)) / 60);
    uptime = uptime % 60;
    return hours + ' hours ' + minutes + ' minutes ' + uptime + ' seconds'
}

exports.time = getTime;