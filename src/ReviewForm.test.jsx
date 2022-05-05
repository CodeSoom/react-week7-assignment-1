import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review write fields ', () => {
    const handleChange = jest.fn();

    const { container, queryByLabelText } = render((
      <ReviewForm
        onChange={handleChange}
      />
    ));

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listens input change event', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <ReviewForm
        onChange={handleChange}
      />
    ));

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '맛있어요' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
