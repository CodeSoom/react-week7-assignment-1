import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RestaurantReviewForm from './RestaurantReviewForm';

describe('RestaurantReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function rednerRestaurantReviewForm({ score, reviewContent } = { score: 0, reviewContent: '' }) {
    return render(
      <RestaurantReviewForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        fields={{ score, reviewContent }}
      />,
    );
  }

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  context('renders RestaurantReviewForm', () => {
    const { getByLabelText, container } = rednerRestaurantReviewForm();

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
    expect(container.querySelector('button')).toHaveTextContent('리뷰 남기기');
  });

  context('when click "리뷰 남기기" button', () => {
    it('request review submit', () => {
      const { container } = rednerRestaurantReviewForm();

      fireEvent.click(container.querySelector('button'));

      expect(handleSubmit).toBeCalled();
    });
  });

  context('when change the input value', () => {
    it('changed input value', () => {
      const { getByLabelText } = rednerRestaurantReviewForm({ score: '', reviewContent: '' });

      const controls = [
        {
          label: '평점', name: 'score', previous: '', value: '5',
        },
        {
          label: '리뷰 내용', name: 'reviewContent', previous: '', value: '맛있던거 같기도하고',
        },
      ];

      controls.forEach(({
        label, name, previous, value,
      }) => {
        const labelText = getByLabelText(label);

        expect(labelText.value).toBe(previous);

        fireEvent.change(labelText, {
          target: { value },
        });

        expect(handleChange).toBeCalledWith({
          name,
          value,
        });
      });
    });
  });
});
