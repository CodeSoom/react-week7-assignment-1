import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderReviewForm({ restaurantId }) {
    return render((
      <ReviewForm
        restaurantId={restaurantId}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when logged in', () => {
    it('renders review fields', () => {
      const { queryByLabelText } = renderReviewForm({});

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders "리뷰 남기기" button', () => {
      const { queryByText } = renderReviewForm({});

      expect(queryByText('리뷰 남기기')).not.toBeNull();
    });

    it('listens input change', () => {
      const { queryByLabelText } = renderReviewForm({});
      const controls = [
        {
          label: '평점',
          value: '5',
        },
        {
          label: '리뷰 내용',
          value: '맛나요!',
        },
      ];

      controls.forEach(({ label, value }) => {
        fireEvent.change(queryByLabelText(label), { target: { value } });

        expect(handleChange).toBeCalled();
      });
    });

    it('listens "리뷰 남기기" button click', () => {
      const { queryByRole } = renderReviewForm({});

      fireEvent.click(queryByRole('button'));

      expect(handleClick).toBeCalled();
    });
  });
});
