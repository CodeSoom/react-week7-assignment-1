import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderReviewForm({
    score = '',
    description = '',
    onChange = handleChange,
    onClick = handleClick,
    accessToken = 'ACCESS_TOKEN',
  }) {
    return render((
      <ReviewForm
        score={score}
        description={description}
        onChange={onChange}
        onClick={onClick}
        accessToken={accessToken}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when logged in', () => {
    it('renders login fields', () => {
      const { queryByLabelText } = renderReviewForm({});

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders login button', () => {
      const { container } = renderReviewForm({});

      expect(container).toContainHTML('type="button"');
    });

    it('listens input change', () => {
      const { queryByLabelText } = renderReviewForm({});
      const controls = [
        {
          label: '평점',
          value: 5,
        },
        {
          label: '리뷰 내용',
          value: '맛있어요',
        },
      ];

      controls.forEach(({ label, value }) => {
        fireEvent.change(queryByLabelText(label), { target: { value } });

        expect(handleChange).toBeCalled();
      });
    });

    it('listens "Log In" button click', () => {
      const { queryByRole } = renderReviewForm({});

      fireEvent.click(queryByRole('button'));

      expect(handleClick).toBeCalled();
    });
  });
});
