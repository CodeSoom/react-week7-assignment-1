import { render, fireEvent } from '@testing-library/react';

import ReviewInput from './ReviewInput';

describe('ReviewInput', () => {
  const handleChange = jest.fn();

  function renderReviewInput({ label, type, name }) {
    return render(
      <ReviewInput
        label={label}
        type={type}
        inputName={name}
        onChange={handleChange}
      />,
    );
  }

  context('without input type', () => {
    it('renders input with a text type', () => {
      const { container, getByLabelText } = renderReviewInput(
        { label: '리뷰 내용', name: 'description' },
      );

      expect(container).toContainHTML('type="text"');
      expect(getByLabelText('리뷰 내용')).not.toBeNull();
    });
  });

  context('with input type', () => {
    it('renders input with a given type', () => {
      const { container, getByLabelText } = renderReviewInput(
        { label: '평점', type: 'number', name: 'score' },
      );

      expect(container).toContainHTML('type="number"');
      expect(getByLabelText('평점')).not.toBeNull();
    });
  });

  it('listens change event', () => {
    const label = '리뷰 내용';
    const name = 'description';
    const value = 'awesome';

    const { getByLabelText } = renderReviewInput({ label, name });

    fireEvent.change(getByLabelText(label), { target: { value } });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
