import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewContainer from './ReviewContainer';

describe('ReviewContainer', () => {
  const dispatch = jest.fn();

  function renderReviewContainer() {
    return render(<ReviewContainer
      restaurantId="1"
      reviewItems={
        [
          {
            id: 1,
            name: '테스터',
            score: 5,
            description: '맛있어요',
          },
        ]
      }
    />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
      reviewFields: {
        score: '',
        description: '',
      },
    }));
  });

  given('restaurant', () => ({
    reviewItems: [
      {
        id: 1,
        name: '테스터',
        score: 5,
        description: '맛있어요',
      },
    ],
  }));

  context('without accessToken', () => {
    it('do not renders review write form', () => {
      const { queryByLabelText } = renderReviewContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });
  });

  context('with accessToken', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    it('renders review write form', () => {
      const { queryByLabelText } = renderReviewContainer();

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('listens change events', () => {
      const { getByLabelText } = renderReviewContainer();

      const controls = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: '최고' },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), { target: { value } });
        expect(dispatch).toBeCalledWith({
          type: 'changeReviewFields',
          payload: { name, value },
        });
      });
    });

    it('renders 리뷰남기기 button', () => {
      const { getByText } = renderReviewContainer();
      fireEvent.click(getByText('리뷰 남기기'));
      expect(dispatch).toBeCalled();
    });
  });
});
