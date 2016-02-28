import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  roomNumber: DS.attr('string'),
  eventDate: DS.attr('number'),
  eventTime: DS.attr('number'),
  category: DS.attr('string'),
  createdAt: DS.attr('date')
});
