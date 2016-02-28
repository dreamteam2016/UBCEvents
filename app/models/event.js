import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  roomNumber: DS.attr('number'),
  date: DS.attr('number'),
  time: DS.attr('number'),
  category: DS.attr('string')
});
