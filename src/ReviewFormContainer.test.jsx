import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render((
      <ReviewFormContainer />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      reviewFields: {
        score: '',
        description: '',
      },
    }));
  });

  it('renders header called "리뷰 작성"', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('리뷰 작성');
  });

  it('listen change events', () => {
    const { getByLabelText } = renderRestaurantContainer();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '최고의 맛!' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(dispatch).toBeCalledWith({
        type: 'changeReviewField',
        payload: { name, value },
      });
    });
  });

  it('renders "리뷰 남기기" button', () => {
    const { getByText } = renderRestaurantContainer();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(dispatch).toBeCalledTimes(4);
  });
});
