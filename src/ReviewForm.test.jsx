import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleClick.mockClear();
  });

  function renderReviewForm({ score, description }) {
    return render((
      <ReviewForm
        fields={{ score, description }}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('renders review form', () => {
    const { queryByLabelText, getByText } = renderReviewForm({});

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleClick).toBeCalled();
  });

  it('listens to input change events', () => {
    const controls = [
      {
        label: '평점',
        name: 'number',
        origin: '',
        value: '5',
      },
      {
        label: '리뷰 내용',
        name: 'description',
        origin: '',
        value: '돈쭐맛집',
      },
    ];
    const { getByLabelText } = renderReviewForm({ email: '', password: '' });

    controls.forEach(({
      label, name, origin, value,
    }) => {
      expect(getByLabelText(label).value).toBe(origin);

      fireEvent.change(getByLabelText(label), {
        target: { name, value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
