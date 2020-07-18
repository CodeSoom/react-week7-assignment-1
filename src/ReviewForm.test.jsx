import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const renderLoginForm = () => render(
    <ReviewForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />,
  );

  const controls = [
    { label: '평점', name: 'score', value: '1' },
    { label: '리뷰 내용', name: 'description', value: '별로' },
  ];

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    controls.forEach(({ label }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe('');
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm();

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('runs handleSubmit', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
