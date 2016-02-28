import Ember from 'ember';

export default Ember.Route.extend({
		beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
    	alert("Please log in as admin to add an event!");
      this.transitionTo('application');
    }
  },
	model() {
	    return this.store.createRecord('event');
	  },
	actions: {
			addEvent(newEvent) {
				let amsclubevent = this.modelFor('amsclubevent');
				amsclubevent.get('event').pushObject(newEvent);
				amsclubevent.save();
	      		newEvent.save().then(() => {
	        		this.transitionTo('amsclubevent.events', amsclubevent);
	      		});
	    	}
	    }
	
});
