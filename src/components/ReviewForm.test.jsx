import { fireEvent, render } from '@testing-library/react';
import ReviewForm from './ReviewForm';

describe('ReviewForms', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  function renderReviewForms() {
    return render(
      <ReviewForm
        onChange={onChange}
        onSubmit={onSubmit}
      />);
  }

  beforeEach(() => {
    onChange.mockClear();
    onSubmit.mockClear();
  });

  it('renders input  ', () => {
    const { queryByRole } = renderReviewForms();

    expect(queryByRole('textbox')).not.toBeNull();
  });

  it.each([
    { label: 'Score', value: '3' },
    { label: 'Description', value: 'not Bad' },
  ])('types input, handleChange calls dispatch with changeReviewField', ({
    label, value,
  }) => {
    const { getByLabelText } = renderReviewForms();

    fireEvent.change(getByLabelText(label), {
      target: { value },
    });

    expect(onChange).toBeCalled();
  });

  it('clicks button,  calls dispatch with sendReview', () => {
    const { getByText } = renderReviewForms();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(onSubmit).toBeCalled();
  });
});
