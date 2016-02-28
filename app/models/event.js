import DS from 'ember-data';
import Ember from 'ember';

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
		var eventDay = this.get('eventDay');

		console.log(this.get('eventDay'));
		if (eventDay == null) {
			return "n/a";
		} else {
			var str = eventDay.toString();
		}

		if (str.substring(0,2) === "10") {
			return ("October" +  " " + str.substring(2,4) + ", " + str.substring(4,8));
		} else if (str.substring(0,2) === "11") {
			return ("November" +  " " + str.substring(2,4) + ", " + str.substring(4,8));
		} else if (str.substring(0,2) === "12") {
			return ("December" +  " " + str.substring(2,4) + ", " + str.substring(4,8));
		} else if (str.substring(0,1) === "1") {
			return ("January" + " " + str.substring(1,3) + ", " + str.substring(3,7));
		} else if (str.substring(0,1) === "2") {
			return ("February" + " " +  str.substring(1,3) + ", " + str.substring(3,7));
		} else if (str.substring(0,1) === "3") {
			return ("March" + " " +  str.substring(1,3) + ", " + str.substring(3,7));
		} else if (str.substring(0,1) === "4") {
			return ("April" + " " +  str.substring(1,3) + ", " + str.substring(3,7));
		} else if (str.substring(0,1) === "5") {
			return ("May" + " " +  str.substring(1,3) + ", " + str.substring(3,7));
		} else if (str.substring(0,1) === "6") {
			return ("June" + " " + str.substring(1,3) + ", " + str.substring(3,7));
		} else if (str.substring(0,1) === "7") {
			return ("July" +  " " + str.substring(1,3) + ", " + str.substring(3,7));
		} else if (str.substring(0,1) === "8") {
			return ("August" +  " " + str.substring(1,3) + ", " + str.substring(3,7));
		} else if (str.substring(0,1) === "9") {
			return ("September" +  " " + str.substring(1,3) + ", " + str.substring(3,7));
		} else return "Error. Cannot be displayed.";
		
		}.property('eventDay')
	
});
