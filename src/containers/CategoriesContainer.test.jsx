import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import CATEGORIES from '../../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories: CATEGORIES,
      selectedCategory: given.selectedCategory,
    }));
  });

  context('with selectedCategory', () => {
    given('selectedCategory', () => CATEGORIES[0]);

    it('renders categories with selected category', () => {
      const { container } = render((
        <CategoriesContainer />
      ));
      expect(container).toHaveTextContent(`${CATEGORIES[0].name}(V)`);
    });
  });

  context('without selectedCategory', () => {
    given('selectedCategory', () => null);

    it('renders categories with selected category', () => {
      const { container, getByText } = render((
        <CategoriesContainer />
      ));
      expect(container).toHaveTextContent(CATEGORIES[0].name);
      fireEvent.click(getByText(CATEGORIES[0].name));
      expect(dispatch).toBeCalled();
    });
  });
});
