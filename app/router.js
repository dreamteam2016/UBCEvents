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
});

export default Router;
