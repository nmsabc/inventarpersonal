import './helloThousand.html';

Template.helloThousand.onCreated(function helloThousandOnCreated(){
  this.helloThousandCounter = new ReactiveVar(1000);
});

Template.helloThousand.helpers({
  helloThousandCounter: function(){
    return Template.instance().helloThousandCounter.get();
  },
});

Template.helloThousand.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.helloThousandCounter.set(instance.helloThousandCounter.get() - 1);
  },
});
