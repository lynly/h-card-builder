import React from 'react';
import { render } from '@testing-library/react';
import HCardBuilder from './HCardBuilder';

const wrapper = () => {
  return render(<HCardBuilder />);
};

describe('HCardBuilder', () => {
  test('it will render without crashing', () => {
    expect(wrapper).not.toThrow();
  });
});
