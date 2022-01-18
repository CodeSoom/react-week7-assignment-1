import { fireEvent, render } from '@testing-library/react';
import ReviewForm from './ReviewForm';

describe('ReviewForms', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  function renderReviewForms({ score, description } = {}) {
    return render((
      <ReviewForm
        onChange={onChange}
        onSubmit={onSubmit}
        reviewField={{
          score,
          description,
        }}
      />
    ));
  }

  beforeEach(() => {
    onChange.mockClear();
    onSubmit.mockClear();
  });

  it('renders review write fields  ', () => {
    const { queryByRole } = renderReviewForms();

    expect(queryByRole('textbox')).not.toBeNull();
  });

  it('renders values of fields', () => {
    const { getByLabelText } = renderReviewForms({
      score: '3',
      description: '맛있어요',
    });

    expect(getByLabelText('Score').value).toBe('3');
    expect(getByLabelText('Description').value).toBe('맛있어요');
  });

  it.each([
    { label: 'Score', value: '3' },
    { label: 'Description', value: 'not Bad' },
  ])('types input, handleChange calls dispatch with changeReviewField', ({
    label, value,
  }) => {
    const { getByLabelText } = renderReviewForms({
      score: '',
      description: '',
    });

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
