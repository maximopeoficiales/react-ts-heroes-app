import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroesScreen from './HeroesScreen';

describe('<HeroesScreen />', () => {
  test('it should mount', () => {
    render(<HeroesScreen />);
    
    const heroesScreen = screen.getByTestId('HeroesScreen');

    expect(heroesScreen).toBeInTheDocument();
  });
});