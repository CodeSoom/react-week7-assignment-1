import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRevieForm({ score, description } = {}) {
    return render((
      <ReviewForm
        fields={{ score, description }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders review write form', () => {
    const { queryByLabelText } = renderRevieForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('renders values of fields', () => {
    const { queryByLabelText } = renderRevieForm({
      score: '5', description: '맛있어요',
    });

    expect(queryByLabelText('평점').value).toBe('5');
    expect(queryByLabelText('리뷰 내용').value).toBe('맛있어요');
  });

  it('listens change events', () => {
    const { getByLabelText } = renderRevieForm();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '정말 최고 :)' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('render send button', () => {
    const { getByText } = renderRevieForm();

    fireEvent.click(getByText('리뷰 남기기'));

    expect(handleSubmit).toBeCalled();
  });
});
