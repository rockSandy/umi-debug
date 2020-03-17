import 'jest';
import React from 'react';
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme';

import BasicLayout from '../index';


describe('Layout: BasicLayout', () => {
  it('Render correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <BasicLayout>123</BasicLayout>
      </MemoryRouter>
    );
    expect(wrapper.html() === '123');
  });
});
