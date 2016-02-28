import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('ubcfaculty');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('ubcfaculties'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
