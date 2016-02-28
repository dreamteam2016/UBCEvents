import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events');

  this.route('reccentre', function() {
    this.route('index');
    this.route('new');
  });
});

export default Router;
