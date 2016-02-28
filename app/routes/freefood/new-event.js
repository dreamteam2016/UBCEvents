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

				let freefood = this.modelFor('freefood');
				freefood.get('event').pushObject(newEvent);
				freefood.save();
	      		newEvent.save().then(() => {
	        		this.transitionTo('freefood.events', freefood);
	      		});
	    	}
	    }
	
});
