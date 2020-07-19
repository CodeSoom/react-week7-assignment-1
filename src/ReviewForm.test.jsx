import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  it('renders review write fields', () => {
    const { queryByLabelText } = render((
      <ReviewForm onChange={handleChange} />
    ));
    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listen change events', () => {
    const { getByLabelText } = render((
      <ReviewForm onChange={handleChange} />
    ));

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '진짜진짜진짜진짜맛있는집이에요' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
