import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const wrapper = () => {
  return render(<App />);
};

describe('App', () => {
  test('it will render without crashing', () => {
    expect(wrapper).not.toThrow();
  });
});
