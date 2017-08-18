// Methods related to inventar collection

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Inventar } from './items.js';

Meteor.methods({
  'inventar.insert'(inventarName, inventarQty, inventarLocation, dataCumparare, warranty) {
    check(inventarName, String);
    check(inventarQty, Number);
    check(inventarLocation, String);
    // check(dataCumparare, Date); // moment is validating data - no need here
    check(warranty, Number);

    return Inventar.insert({
      inventarName,
      inventarQty,
      inventarLocation,
      dataCumparare,
      warranty,
      createdAt: new Date(),
    });
  }, // inventar.insert

});//methods

// inventarName: 'biciclete',
// inventarQty: '3',
// inevntarLocation: 'atelier',
// createdAt: new Date(),
