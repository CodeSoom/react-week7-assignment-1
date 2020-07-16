import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewInput from './ReviewInput';

describe('ReviewInput', () => {
  const handleChange = jest.fn();

  function renderReviewInput() {
    return (
      render(
        <ReviewInput
          label="평점"
          type="number"
          name="score"
          onChange={handleChange}
          value="5"
        />,
      )
    );
  }

  it('renders label', () => {
    const { container } = renderReviewInput();

    expect(container).toHaveTextContent('평점');
  });

  it('listens change event', () => {
    const { queryByLabelText } = renderReviewInput();

    fireEvent.change(queryByLabelText('평점'), {
      target: { value: '3' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'score',
      value: '3',
    });
  });
});
