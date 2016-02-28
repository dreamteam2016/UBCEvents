import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	    return this.store.createRecord('event');
	  },

	  // noteIsValid: function() {
	  // 	var isValid = true;
	  // 	['note.name'].forEach(function(field) {
	  // 		if (this.get(field) === '') {
	  // 			isValid = false;
	  // 		}
	  // 	}, this);
	  // 	return isValid;
	  // },
	actions: {

			addEvent(newEvent) {
				// if (!this.noteIsValid()) {
				// 	return;
				// }

				let amsclubevent = this.modelFor('amsclubevent');
				amsclubevent.get('event').pushObject(newEvent);
				amsclubevent.save();
	      		newEvent.save().then(() => {
	        		this.transitionTo('amsclubevent.events', amsclubevent);
	      		});
	    	}
	    }
	
});
