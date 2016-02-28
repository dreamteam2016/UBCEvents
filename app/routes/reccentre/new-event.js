import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	    return this.store.createRecord('event');
	  },

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
