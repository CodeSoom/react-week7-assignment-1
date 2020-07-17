import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleOnChange = jest.fn();
  const handleOnSubmit = jest.fn();

  const renderComponent = () => render((
    <ReviewForm onChange={handleOnChange} onSubmit={handleOnSubmit} />
  ));

  beforeEach(() => {
    handleOnChange.mockClear();
    handleOnSubmit.mockClear();
  });

  it('render Review Title', () => {
    const { getByLabelText } = renderComponent();

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  context('when input email', () => {
    it('fires change event', () => {
      const { getByLabelText } = renderComponent();
      // When
      const scoreInput = getByLabelText('평점');
      fireEvent.change(scoreInput, { target: { name: 'score', value: 1 } });
      // Then
      expect(handleOnChange).toBeCalledTimes(1);
    });
  });

  context('when input password', () => {
    it('fires change event', () => {
      const { getByLabelText } = renderComponent();
      // When
      const descriptionInput = getByLabelText('리뷰 내용');
      fireEvent.change(descriptionInput, { target: { name: 'description', value: '리뷰내용' } });
      // Then
      expect(handleOnChange).toBeCalledTimes(1);
    });
  });

  context('when click submit-button', () => {
    it('fires submit event', () => {
      const { getByRole } = renderComponent();
      // When
      const submitButton = getByRole('button', { name: '리뷰 남기기' });
      fireEvent.click(submitButton);
      // Then
      expect(handleOnSubmit).toBeCalledTimes(1);
    });
  });
});
