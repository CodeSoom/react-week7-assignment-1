import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderReviewForm() {
    return render((
      <ReviewForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        reviewFields={{ name: '', value: '' }}
      />
    ));
  }

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('renders review write fields', () => {
    const { queryByLabelText } = renderReviewForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByLabelText } = renderReviewForm();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '정말 최고 :)' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Send" button', () => {
    const { container } = renderReviewForm();

    expect(container).toHaveTextContent('리뷰 남기기');
  });

  it('listens click event', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
