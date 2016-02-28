import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	building: DS.attr('string'),
	roomNumber: DS.attr('string'),
	lat: DS.attr('number'),
	lng: DS.attr('number')
  
});
