// Fill the DB with example data on startup

// cehck:
// API app folder - create a new mongoDB

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Inventar } from '../../api/inventar/items.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  } //if Links.find

if (Inventar.find().count() == 0) {
  const inventarData = [
    {
      inventarName: 'biciclete',
      inventarQty: '3',
      inventarLocation: 'atelier',
      dataCumparare: '01/JAN/2013',
      warranty: '1',
      createdAt: new Date(),
    },
    {
      inventarName: 'Hamace',
      inventarQty: '2',
      inventarLocation: 'Spatiul tehnic',
      dataCumparare: '01/AUG/2014',
      warranty: '1',
      createdAt: new Date(),
    },
    {
      inventarName: 'masini',
      inventarQty: '2',
      inventarLocation: 'garaj',
      dataCumparare: '01/JUN/2013',
      warranty: '1',
      createdAt: new Date(),
    },
  ];

    inventarData.forEach(link => Inventar.insert(link));
} // if Inventar

}); // Meteor.starts
