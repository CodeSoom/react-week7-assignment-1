import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  /**
   * 평점
   * 리뷰 내용
   * 리뷰 남기기
   */

  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it('renders labels', () => {
    const { queryByLabelText } = render(<ReviewForm onChange={onChange} />);

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listens for change events', () => {
    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '훌륭하다 훌륭해!' },
    ];

    const { getByLabelText } = render(<ReviewForm onChange={onChange} />);

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(
        getByLabelText(label),
        { target: { name, value } },
      );

      expect(onChange).toBeCalledWith({ name, value });
    });
  });
});
