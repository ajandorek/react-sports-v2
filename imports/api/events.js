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
  'events.insert'(url) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      url: {
        type: String,
        label: 'Your link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null
    });
  },
  'links.setVisibility'(_id, visible) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      visible: {
        type: Boolean
      }
    }).validate({_id, visible});

    Links.update({
      _id,
      userId: this.userId
    },
      { $set: { visible } 
    });
  },
  'links.trackVisit'(_id) {
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({_id});

    Links.update({ _id }, {
      $set: {
        lastVisitedAt: new Date().getTime(),
        },
        $inc: {
          visitedCount: 1
        }
    })
  }
});
