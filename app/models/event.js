import DS from 'ember-data';

export default DS.Model.extend({

	name: DS.attr('string'),
	location: DS.attr('string'),
	roomNumber: DS.attr('string'),
	eventTime: DS.attr('string'),
	eventDay: DS.attr('number'),
	description: DS.attr('string'),
	
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
	}),

	freefood: DS.belongsTo('freefood', {
		async: true,
		inverse: 'event',
		embedded: 'always'
	}),

	other: DS.belongsTo('other', {
		async: true,
		inverse: 'event',
		embedded: 'always'
	}),
	monthToString: function() {
		var month = this.get('eventDay').substring(0,1);
		if (month === '01') {
			return "January";
		} 
		if (month === '02') {
			return "February";
		} 
		if (month === '03') {
			return "March";
		}
		if (month === '04') {
			return "April";
		}
		if (month === '05') {
			return "May";
		}
		if (month === '06') {
			return "June";
		}
		if (month === '07') {
			return "July";
		}
		if (month === '08') {
			return "August";
		}
		if (month === '09') {
			return "September";
		}
		if (month === '10') {
			return "October";
		}
		if (month === '11') {
			return "November";
		}
		if (month === '12') {
			return "December";
		}
	}.property('eventDay')

  });