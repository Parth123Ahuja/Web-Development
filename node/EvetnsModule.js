// event is something that indicates that something has
// happened

const EventEmitter =require('events');
const emitter = new EventEmitter();


//lets register the listner to listen to emit
emitter.on('messageLogged', function (arg)
{
    console.log('listner called',arg);
});
// making a noise or signaling
emitter.emit('messageLogged', {id: 1 , url :'https'});

// the order here is imp fist call the on the the emit



