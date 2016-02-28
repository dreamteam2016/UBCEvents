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
				let ubcfaculty = this.modelFor('ubcfaculty');
				ubcfaculty.get('event').pushObject(newEvent);
				ubcfaculty.save();
	      		newEvent.save().then(() => {
	        		this.transitionTo('ubcfaculty.events', ubcfaculty);
	      		});
	    	}
	    }
	
});
