import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import Signup from './Signup';

if (Meteor.isClient) {
  describe('Signup', function() {
    it('should render the component and exist on the DOM', function() {
      const wrapper = mount(<Signup />);

      // expect(spy.calls[0].arguments[0]).toEqual({ email, password });
      expect(wrapper).toExist();
    });
  });
}
