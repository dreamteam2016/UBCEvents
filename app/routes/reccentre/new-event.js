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

				let reccentre = this.modelFor('reccentre');
				reccentre.get('event').pushObject(newEvent);
				reccentre.save();
	      		newEvent.save().then(() => {
	        		this.transitionTo('reccentre.events', reccentre);
	      		});
	    	}
	    }
	
});
