var events = require('events');
var util = require('util');

function Pulser() {
    events.EventEmitter.call(this);
}

util.inherits(Pulser, events.EventEmitter);

Pulser.prototype.start = function(){
    setInterval(()=>{
        util.log('>>>> pulse');


        var milliseconds = (new Date).getTime();

        this.emit('pulse', milliseconds);
        util.log('<<<< pulse');
    }, 1000);
}

var pulser = new Pulser();

var e = "pulse"

pulser.on(e, (d) => {
    util.log("pulse received from " + d);
});

pulser.on(e, (d) => {
    util.log("pulse again");
});

pulser.start();

