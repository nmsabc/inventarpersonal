import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

import '../../ui/pages/about/about.js';
import '../../ui/pages/about/contact.js';
import '../../ui/pages/contact/contact.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

// FlowRouter.contact = {
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_contact' });
//   },
// };
//
// FlowRouter.about = {
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_about' });
//   },
// };

FlowRouter.route('/about', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_about' });
  },
});

FlowRouter.route('/contact', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_contact' });
  },
});
FlowRouter.route('/contact2', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_contact2' });
  },
});
