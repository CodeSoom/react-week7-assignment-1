import { fireEvent, render } from '@testing-library/react';
import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('calls onSubmit when the "리뷰 남기기" button is clicked', () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<ReviewForm onSubmit={onSubmit} />);

    fireEvent.change(getByLabelText('평점'), { target: { value: 5 } });
    fireEvent.change(getByLabelText('리뷰 내용'), { target: { value: '좋아요' } });
    fireEvent.click(getByText('리뷰 남기기'));

    expect(onSubmit).toBeCalledWith({ score: '5', description: '좋아요' });
  });
});
