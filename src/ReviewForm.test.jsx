import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const renderReviewForm = () => render((
    <ReviewForm
      onChange={onChange}
      onSubmit={onSubmit}
      fields={given.fields}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
    given('fields', () => undefined);
  });

  it('renders labels', () => {
    const { queryByLabelText } = renderReviewForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('listens for change events', () => {
    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '훌륭하다 훌륭해!' },
    ];

    const { getByLabelText } = renderReviewForm();

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(
        getByLabelText(label),
        { target: { name, value } },
      );

      expect(onChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "리뷰 남기기" buttons', () => {
    const { container } = renderReviewForm();

    expect(container).toHaveTextContent('리뷰 남기기');
  });

  it('listens for click event', () => {
    const { getByText } = renderReviewForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(onSubmit).toBeCalled();
  });

  context('with field values', () => {
    given('fields', () => ({
      score: '5',
      description: '훌륭하다 훌륭해!',
    }));

    it('renders field values', () => {
      const { queryByDisplayValue } = renderReviewForm();

      expect(queryByDisplayValue('5')).not.toBeNull();
      expect(queryByDisplayValue('훌륭하다 훌륭해!')).not.toBeNull();
    });
  });
});
