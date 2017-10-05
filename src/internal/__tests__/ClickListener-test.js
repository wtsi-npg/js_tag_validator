/* global document, MouseEvent */

import React from 'react';
import ClickListener from '../ClickListener';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('ClickListener', () => {
  it('renders children as expected', () => {
    const onClickOutside = jest.fn();

    const wrapper = shallow(
      <ClickListener onClickOutside={onClickOutside}>
        <div className="child">Test</div>
        <div className="child">Test</div>
      </ClickListener>
    );

    expect(wrapper.find('.child').length).toBe(2);
  });

  it('should invoke onClickOutside if click is outside of the component', () => {
    const onClickOutside = jest.fn();

    mount(
      <ClickListener onClickOutside={onClickOutside}>
        <div className="child">Test</div>
        <div className="child">Test</div>
      </ClickListener>
    );

    const evt = new MouseEvent('click');
    document.dispatchEvent(evt);

    expect(onClickOutside).toBeCalled();
  });
});
