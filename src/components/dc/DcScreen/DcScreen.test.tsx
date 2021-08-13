import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DCScreen from './DcScreen';

describe('<DcScreen />', () => {
  test('it should mount', () => {
    render(<DCScreen />);
    
    const dcScreen = screen.getByTestId('DcScreen');

    expect(dcScreen).toBeInTheDocument();
  });
});