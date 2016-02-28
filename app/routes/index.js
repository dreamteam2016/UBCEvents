import Ember from 'ember';

export default Ember.Route.extend({
    model() {
       
        // var mockData = [
        //     { name: "event1", location: "irving library" },
        //     { name: "event2", location: "koerner library" },
        //     { name: "nwHacks", location: "UBC" },
        //     { name: "gameJam", location: "Also at UBC" }
        //     ];
        
        // return mockData;
        return this.store.findAll('event');
       
    }

    
});
