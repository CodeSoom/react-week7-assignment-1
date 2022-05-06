import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const onChange = jest.fn();

  const renderReviewForm = () => render((
    <ReviewForm
      onChange={onChange}
    />
  ));

  beforeEach(() => {
    onChange.mockClear();
  });

  it('renders labels', () => {
    const { queryByLabelText } = renderReviewForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listens for change events', () => {
    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '훌륭하다 훌륭해!' },
    ];

    const { getByLabelText } = renderReviewForm();

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(
        getByLabelText(label),
        { target: { name, value } },
      );

      expect(onChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "평가 남기기" buttons', () => {
    const { container } = renderReviewForm();

    expect(container).toHaveTextContent('평가 남기기');
  });
});
