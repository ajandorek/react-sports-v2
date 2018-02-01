import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';

export const Events = new Mongo.Collection('events');

if (Meteor.isServer) {
  Meteor.publish('links', function () {
    console.log('Event Published');
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
      }
    }).validate({ event, sport, location, time });

    Events.insert({
      _id: shortid.generate(),
      event,
      sport,
      location,
      time
    });
  }
});
