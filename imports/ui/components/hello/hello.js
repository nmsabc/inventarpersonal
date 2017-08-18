import './hello.html';
import '../helloThousand/helloThousand.js';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.downcounter = new ReactiveVar(100);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  downcounter(){
    return Template.instance().downcounter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    instance.downcounter.set(instance.downcounter.get() - 1);
  },
});
