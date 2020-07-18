import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('renders review input form and submit button', () => {
    const { getByLabelText, getByText } = render(<ReviewForm />);

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();

    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });

  it('listens change events', () => {
    const { getByLabelText } = render((
      <ReviewForm
        onChange={handleChange}
      />
    ));

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: 'good!' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('listens click events', () => {

    const { getByText } = render((
      <ReviewForm
        onSubmit={handleSubmit}
      />
    ));

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
