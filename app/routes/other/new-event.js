import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	    return this.store.createRecord('event');
	  },

	actions: {

			addEvent(newEvent) {
				let other = this.modelFor('other');
				other.get('event').pushObject(newEvent);
				other.save();
	      		newEvent.save().then(() => {
	        		this.transitionTo('other.events', other);
	      		});
	    	}
	    }
	
});
