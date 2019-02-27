var events = require('events');
var util = require('util');

function Pulser(){
    events.EventEmitter.call(this);
}

util.inherits(Pulser, events.EventEmitter);

Pulser.prototype.start = function(){
    setInterval(() => {
        util.log('>>>> pulse');
        this.emit('pulse', 'value1');
        util.log('<<<< pulse')
    }, 1000);
}

// Instantiate a Pulser object
var pulser = new Pulser();
// Handler function
pulser.on('pulse', (v1) => {
    util.log('pulse received' + v1);
});
// Start it pulsing
pulser.start();