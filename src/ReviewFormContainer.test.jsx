import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewFormContainer from './ReviewFormContainer';

describe('ReviewFormContainer', () => {
  jest.mock('react-redux');

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const RESTAURANT_ID = 1;

  function renderReviewFormContainer() {
    return render((
      <ReviewFormContainer restaurantId={RESTAURANT_ID} />
    ));
  }

  context('with accessToken', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      useSelector.mockImplementation((selector) => selector({
        reviewFields: {
          score: '',
          description: '',
        },
        accessToken: 'ACCESS_TOKEN',
      }));
    });

    it('renders review fields', () => {
      const { queryByLabelText } = renderReviewFormContainer();

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders "리뷰 남기기" button', () => {
      const { container, queryByText } = renderReviewFormContainer();

      expect(queryByText('리뷰 남기기')).not.toBeNull();
      expect(container).toContainHTML('type="button"');
    });

    it('listens input change for "changeReviewField" action', () => {
      const { queryByLabelText } = renderReviewFormContainer();

      const controls = [
        {
          label: '평점',
          name: 'score',
          value: '5',
        },
        {
          label: '리뷰 내용',
          name: 'description',
          value: '맛있어~~요!',
        },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(queryByLabelText(label), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'changeReviewField',
          payload: {
            name,
            value,
          },
        });
      });
    });

    it('listens "리뷰 남기기" button click for "sendReview" action', () => {
      const { queryByRole } = render((
        <ReviewFormContainer />
      ));

      fireEvent.click(queryByRole('button'));

      expect(dispatch).toBeCalled();
    });
  });

  context('without accessToken', () => {
    beforeEach(() => {
      jest.clearAllMocks();

      useSelector.mockImplementation((selector) => selector({
        reviewFields: {
          score: '',
          description: '',
        },
        accessToken: null,
      }));
    });

    it('does not render review fields', () => {
      const { queryByLabelText } = renderReviewFormContainer();

      expect(queryByLabelText('평점')).toBeNull();
      expect(queryByLabelText('리뷰 내용')).toBeNull();
    });

    it('does not renders "리뷰 남기기" button', () => {
      const { queryByText } = renderReviewFormContainer();

      expect(queryByText('리뷰 남기기')).toBeNull();
    });
  });
});
