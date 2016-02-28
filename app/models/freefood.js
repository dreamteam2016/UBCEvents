import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	event: DS.hasMany('event', {
		async: true,
		inverse: 'freefood',
		embedded: 'always'
	}),
    imagePath: DS.attr('string')
});