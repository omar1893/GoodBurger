import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FilterPills from './FilterPills';

describe('FilterPills component', () => {
  it('should render three buttons', () => {
    render(<FilterPills selectFilter={() => {}} selectedFilter="All" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(3);
  });

  it('should call selectFilter when a button is clicked', () => {
    const selectFilter = jest.fn();
    render(<FilterPills selectFilter={selectFilter} selectedFilter="All" />);
    const allButton = screen.getByText('All');
    const sandwichesButton = screen.getByText('Sandwiches');
    fireEvent.click(allButton);
    expect(selectFilter).toHaveBeenCalledWith('All');
    fireEvent.click(sandwichesButton);
    expect(selectFilter).toHaveBeenCalledWith('Sandwiches');
  });
});