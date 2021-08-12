import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroList from './HeroList';

describe('<HeroList />', () => {
  test('it should mount', () => {
    render(<HeroList />);
    
    const heroList = screen.getByTestId('HeroList');

    expect(heroList).toBeInTheDocument();
  });
});