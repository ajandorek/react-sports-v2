import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  Meteor.publish('events', function () {
    return Events.find();
  });
}

Meteor.methods({
  'events.insert'(event, sport, location, time) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      event: {
        type: String,
        label: 'Event name'
      }, 
      sport: {
        type: String,
        label: 'Sport'
      },
      location: {
        type: String,
        label: 'Event Location'
      },
      time: {
        type: String,
        label: 'Event Time'
      },
      // latlng: {
      //   type: Object,
      //   label: 'latlng'
      // }
    }).validate({ event, sport, location, time });

    Events.insert({
      event,
      sport,
      location,
      time
    });
  }
});
