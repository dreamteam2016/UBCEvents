import DS from 'ember-data';

export default DS.Model.extend({

	name: DS.attr('string'),
	location: DS.attr('string'),
	roomNumber: DS.attr('string'),
	eventTime: DS.attr('number'),
	createdAt: DS.attr('string', {
	  	defaultValue() {
	  		return new Date();
	  	}
	  }),

	reccentre: DS.belongsTo('reccentre', {
		async: true,
		inverse: 'event',
		embedded: 'always'
	}),

	amsclubevent: DS.belongsTo('amsclubevent', {
		async: true,
		inverse: 'event',
		embedded: 'always'
	}),

	ubcfaculty: DS.belongsTo('ubcfaculty', {
		async: true,
		inverse: 'event',
		embedded: 'always'
	})
  });