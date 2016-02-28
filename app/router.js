import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('reccentres', function() {
      this.route('new');
    });

  this.route('reccentre', { path: '/reccentre/:id'}, function() {
    this.route('events');
    this.route('new-event');
  });

  this.route('amsclubevent', { path: '/amsclubevent/:id'}, function() {
    this.route('events');
    this.route('new-event');
  });

  this.route('amsclubevents', function() {
    this.route('new');
  });

  this.route('ubcfaculty', { path: '/ubcfaculty/:id'}, function() {
    this.route('events', function() {});
    this.route('new-event');
  });

  this.route('ubcfaculties', function() {
    this.route('new');
  });

  this.route('freefood', { path: '/freefood/:id'}, function() {
    this.route('events');
    this.route('new-event');
  });

  this.route('freefoods', function() {
    this.route('new');
  });

  this.route('events', function() {});

  this.route('event', { path: '/event/:id'}, function() {});

  this.route('other', { path: '/other/:id'}, function() {
    this.route('events');
    this.route('new-event');
  });

  this.route('others', function() {
    this.route('new');
  });
  
});

export default Router;
