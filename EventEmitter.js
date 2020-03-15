let events = require('events');
let eventEmitter = new events.EventEmitter();
let event = events.EventEmitter;

// eventEmitter.setMaxListeners(1); // if you listen more than twice throw warning of memory leak.


// listener #1
let listner1 = function listner1() {
  console.log('listner1 executed.');
}

// listener #2
let listner2 = function listner2() {
  console.log('listner2 executed.');
}

// listener #3
let listner3 = function listner3(a, b, c) {
  console.log('listner3 executed.', a+b+c);
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

let eventListeners = event.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
let totalListeners = eventEmitter.listeners('connection');
console.log(totalListeners, " Total Listner(s) listening to connection event");



// Fire the connection event
eventEmitter.emit('connection');



eventEmitter.once('connection2', listner3);

let eventListeners2 = event.listenerCount(eventEmitter,'connection2');
console.log(eventListeners2 + " Listner(s) listening to connection2 event");

eventEmitter.emit('connection2', 2, 6, 99);
eventEmitter.emit('connection2', 6, 6, 3);


// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1); // OR eventEmitter.off('connection', listner1);
// eventEmitter.removeAllListeners(['connection']);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = event.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");


console.log("Program Ended.");
