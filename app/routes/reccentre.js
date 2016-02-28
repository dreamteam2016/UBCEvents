import Ember from 'ember';

export default Ember.Route.extend({
    //renderTemplate: function() {
    //    this.render('index');   
    //},

    model(params) {
        return this.store.find('reccentre', params.id);
    }

});
