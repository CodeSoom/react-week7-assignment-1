import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders review input fields', () => {
    const reviewFields = { score: 5, description: '굿!' };

    const { getByDisplayValue, getByText } = render(
      <ReviewForm
        reviewFields={reviewFields}
      />,
    );

    expect(getByText('평점')).not.toBeNull();
    expect(getByText('리뷰 내용')).not.toBeNull();
    expect(getByDisplayValue('5')).not.toBeNull();
    expect(getByDisplayValue('굿!')).not.toBeNull();
  });

  it('renders input field to handle onChange', () => {
    const reviewFields = { score: 5, value: '짱맛있다' };

    const { getByLabelText } = render(
      <ReviewForm
        reviewFields={reviewFields}
        onChange={handleChange}
      />,
    );

    fireEvent.change(getByLabelText('평점'), {
      target: { value: 10 },
    });
    fireEvent.change(getByLabelText('리뷰 내용'), {
      target: { value: 'good~' },
    });

    expect(handleChange).toBeCalledTimes(2);
  });

  it('renders a button to handle onSubmit', () => {
    const reviewFields = { score: 5, value: '짱맛있다' };

    const { getByRole } = render(
      <ReviewForm
        reviewFields={reviewFields}
        onSubmit={handleSubmit}
      />,
    );

    expect(getByRole('button', { name: '리뷰 남기기' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

    expect(handleSubmit).toBeCalled();
  });
});
