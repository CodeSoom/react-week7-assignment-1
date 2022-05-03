import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderReviewForm() {
    return render(
      <ReviewForm
        reviewFields={{ score: '', description: '' }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('리뷰 폼을 렌더한다.', () => {
    const { queryByLabelText } = renderReviewForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('리뷰 폼에 입력 이벤트가 동작한다.', () => {
    const { getByLabelText } = renderReviewForm();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '정말 최고!' },
    ];

    controls.forEach(({
      label, name, value,
    }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('"리뷰 남기기"버튼을 렌더한다.', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
