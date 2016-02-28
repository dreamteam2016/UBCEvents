import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('amsclubevent');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('amsclubevents'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});

