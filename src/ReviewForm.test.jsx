import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  it('renders review write fields', () => {
    const { getByLabelText } = render((
      <ReviewForm
        onChange={handleChange}
      />
    ));

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it.each`
    name             | label        | value  
    ${'score'}       | ${'평점'}     | ${'5'}
    ${'description'} | ${'리뷰 내용'} | ${'정말 최고에요'}
  `('listen $name change event', ({ name, label, value }) => {
    const { getByLabelText } = render((
      <ReviewForm
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText(label), {
      target: { value },
    });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
