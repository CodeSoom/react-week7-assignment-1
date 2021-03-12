import React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
        { id: 2, name: '부산' },
      ],
      selectedRegion: { id: 1, name: '서울' },
    }));
  });

  it('renders checked regions', () => {
    render(<RegionsContainer />);

    expect(screen.getByText('서울(V)')).toBeInTheDocument();
    expect(screen.getByText('부산')).toBeInTheDocument();

    fireEvent.click(screen.getByText('부산'));

    expect(dispatch).toBeCalled();
  });
});
