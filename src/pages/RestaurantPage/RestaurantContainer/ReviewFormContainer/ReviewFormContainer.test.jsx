import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { changeReviewField } from '@/store/actions';
import { sendReview } from '@/store/async-actions';

import ReviewFormContainer from './ReviewFormContainer';

jest.mock('@/store/async-actions');

describe('ReviewFormContainer', () => {
  const restaurantId = 6;

  const dispatch = jest.fn();

  useDispatch.mockReturnValue(dispatch);

  useSelector.mockImplementation((selector) => selector({
    reviewFields: {
      score: '',
      description: '',
    },
    accessToken: given.accessToken,
  }));

  const renderReviewFormContainer = () => render((
    <ReviewFormContainer
      restaurantId={restaurantId}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when logged out', () => {
    beforeEach(() => {
      given('accessToken', () => '');
    });

    it('renders nothing', () => {
      const { container } = renderReviewFormContainer();

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when logged in', () => {
    beforeEach(() => {
      given('accessToken', () => 'ACCESS_TOKEN');
    });

    it('renders inputs', () => {
      const { getByLabelText } = renderReviewFormContainer();

      const labels = ['평점', '리뷰 내용'];

      labels.forEach((label) => {
        expect(getByLabelText(label)).toBeInTheDocument();
      });
    });

    it('dispatches changeReviewField when inputs are changed', () => {
      const { getByLabelText } = renderReviewFormContainer();

      const inputs = [
        { label: '평점', name: 'score', value: '9' },
        { label: '리뷰 내용', name: 'description', value: '맛있어요' },
      ];

      inputs.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), { target: { value } });

        expect(dispatch).toBeCalledWith(changeReviewField({ name, value }));
      });
    });

    it('renders submit button', () => {
      const { getByRole } = renderReviewFormContainer();

      expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
    });

    it('dispatches sendReview when button is clicked', () => {
      const { getByRole } = renderReviewFormContainer();

      fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

      expect(dispatch).toBeCalledWith(sendReview({ restaurantId }));
    });
  });
});
