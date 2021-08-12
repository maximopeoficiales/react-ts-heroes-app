import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarvelScreen from './MarvelScreen';

describe('<MarvelScreen />', () => {
  test('it should mount', () => {
    render(<MarvelScreen />);
    
    const marvelScreen = screen.getByTestId('MarvelScreen');

    expect(marvelScreen).toBeInTheDocument();
  });
});