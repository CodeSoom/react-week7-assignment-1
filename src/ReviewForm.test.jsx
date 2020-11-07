import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  function renderRestaurantContainer() {
    return render(<ReviewForm onChange={handleChange} />);
  }

  it('renders review write fields', () => {
    const { queryByLabelText } = renderRestaurantContainer();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listen change events', () => {
    const { getByLabelText } = renderRestaurantContainer();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '최고의 맛!' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
