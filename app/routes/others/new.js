import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('other');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('others'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});

