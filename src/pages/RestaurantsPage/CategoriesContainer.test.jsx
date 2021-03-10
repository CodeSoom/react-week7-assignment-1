import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
        { id: 2, name: '양식' },
      ],
      selectedCategory: { id: 1, name: '한식' },
    }));
  });

  it('renders regions and checked symbol', () => {
    render(<CategoriesContainer />);

    expect(screen.getByText('한식(V)')).toBeInTheDocument();
    expect(screen.getByText('양식')).toBeInTheDocument();

    fireEvent.click(screen.getByText('양식'));

    expect(dispatch).toBeCalled();
  });
});
