import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchScreen from './SearchScreen';

describe('<SearchScreen />', () => {
  test('it should mount', () => {
    render(<SearchScreen />);
    
    const searchScreen = screen.getByTestId('SearchScreen');

    expect(searchScreen).toBeInTheDocument();
  });
});