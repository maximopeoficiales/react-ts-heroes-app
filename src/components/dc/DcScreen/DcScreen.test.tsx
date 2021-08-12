import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DcScreen from './DcScreen';

describe('<DcScreen />', () => {
  test('it should mount', () => {
    render(<DcScreen />);
    
    const dcScreen = screen.getByTestId('DcScreen');

    expect(dcScreen).toBeInTheDocument();
  });
});