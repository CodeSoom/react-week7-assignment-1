import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import REGIONS from '../../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      selectedRegion: given.selectedRegion,
    }));
  });

  context('with selectedRegion', () => {
    given('selectedRegion', () => REGIONS[0]);

    it('renders regions with selected region', () => {
      const { container } = render((
        <RegionsContainer />
      ));
      expect(container).toHaveTextContent(`${REGIONS[0].name}(V)`);
    });
  });

  context('without selectedRegion', () => {
    given('selectedRegion', () => null);

    it('renders regions', () => {
      const { container, getByText } = render((
        <RegionsContainer />
      ));
      expect(container).toHaveTextContent(REGIONS[0].name);
      fireEvent.click(getByText(REGIONS[0].name));
      expect(dispatch).toBeCalled();
    });
  });
});
