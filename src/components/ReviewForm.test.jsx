import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const renderReviewForm = () => (
    render(<ReviewForm onChange={handleChange} onSubmit={handleSubmit} />)
  );

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('화면에 리뷰 폼이 존재한다.', () => {
    const { getByText, getByLabelText } = renderReviewForm();

    expect(getByLabelText('평점', { selector: 'input' })).not.toBeNull();
    expect(getByLabelText('리뷰', { selector: 'input' })).not.toBeNull();
    expect(getByText('리뷰 남기기')).not.toBeNull();
  });

  it('리뷰 폼에 텍스트를 입력하면 onChange 핸들러가 실행된다.', () => {
    const { getByLabelText } = renderReviewForm();
    const labels = [{ name: '평점', value: 50 }, { name: '리뷰', value: '맛있어요' }];

    labels.forEach(({ name, value }) => {
      fireEvent.change(getByLabelText(name), { target: { value } });
      expect(handleChange).toBeCalled();
    });

    expect(handleChange).toBeCalledTimes(2);
  });

  it('"로그인" 버튼을 클릭하면 onSubmit 핸들러가 실행된다.', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('리뷰 남기기'));
    expect(handleSubmit).toBeCalled();
  });
});
