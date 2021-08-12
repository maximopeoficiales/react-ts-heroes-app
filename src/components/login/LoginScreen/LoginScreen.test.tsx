import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginScreen from './LoginScreen';

describe('<LoginScreen />', () => {
  test('it should mount', () => {
    render(<LoginScreen />);
    
    const loginScreen = screen.getByTestId('LoginScreen');

    expect(loginScreen).toBeInTheDocument();
  });
});