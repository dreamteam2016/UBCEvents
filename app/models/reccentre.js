import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	event: DS.hasMany('event', {
		async: true,
		inverse: 'reccentre',
		embedded: 'always'
	}),
	imagePath: DS.attr('string')
});
