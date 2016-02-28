import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	event: DS.hasMany('event', {
		async: true,
		inverse: 'other',
		embedded: 'always'
	}),
	imagePath: DS.attr('string')
});
