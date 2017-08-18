// All inventar-related publications

import { Meteor } from 'meteor/meteor';
import { Inventar } from '../items.js';

Meteor.publish('inventar.all', function () {
  return Inventar.find();
});
