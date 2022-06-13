import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import CATEGORIES from '../../../fixtures/categories';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  const KOREAN_FOOD = CATEGORIES[0];

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with loading', () => {
    it('renders "로딩중..."', () => {
      useSelector.mockImplementation((selector) => selector({
        categories: {
          isLoading: true,
          data: [],
        },
      }));
      const { queryByText } = render((
        <CategoriesContainer />
      ));
      expect(queryByText('로딩중...')).toBeInTheDocument();
    });
  });

  context('with error', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: {
        isError: true,
        errorMessage: '에러가 발생했습니다.',
        data: [],
      },
    }));
    const { queryByText } = render((
      <CategoriesContainer />
    ));
    expect(queryByText('에러: 에러가 발생했습니다.')).toBeInTheDocument();
  });

  context('with selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories: {
          data: CATEGORIES,
        },
        selectedCategory: KOREAN_FOOD,
      }));
    });

    it('renders categories with selected category', () => {
      const { container } = render((
        <CategoriesContainer />
      ));

      expect(container).toHaveTextContent(`${KOREAN_FOOD.name}(V)`);
    });
  });

  context('without selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories: {
          data: CATEGORIES,
        },
      }));
    });

    it('renders categories with selected category', () => {
      const { container, getByText } = render((
        <CategoriesContainer />
      ));

      expect(container).toHaveTextContent(KOREAN_FOOD.name);

      fireEvent.click(getByText(KOREAN_FOOD.name));

      expect(dispatch).toBeCalled();
    });
  });
});
