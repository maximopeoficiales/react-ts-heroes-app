import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroCard from './HeroCard';

describe('<HeroCard />', () => {
  test('it should mount', () => {
    render(<HeroCard />);
    
    const heroCard = screen.getByTestId('HeroCard');

    expect(heroCard).toBeInTheDocument();
  });
});