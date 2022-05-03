import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const renderReviewForm = (fields) => render(
    <MemoryRouter initialEntries={['/restaurants/1']}>
      <ReviewForm
        fields={fields}
        onSubmit={handleClick}
        onChange={handleChange}
      />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderReviewForm({});

    expect(container).toHaveTextContent('리뷰 등록');
  });

  it('renders review form', () => {
    const reviewFields = {
      score: 3,
      description: '맛있어요',
    };

    const { queryByLabelText } = renderReviewForm(reviewFields);

    expect(queryByLabelText('평점').value).toBe(3);
    expect(queryByLabelText('리뷰 내용').value).toBe('맛있어요');
  });

  it('listens click event', () => {
    const { getByText } = renderReviewForm({});

    fireEvent.click(getByText('리뷰 남기기'));
    expect(handleClick).toBeCalled();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderReviewForm({});

    const controls = [
      { label: '평점', name: 'score', value: 3 },
      { label: '리뷰 내용', name: 'description', value: '맛있어요' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({
        name,
        value,
      });
    });
  });
});
