import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('<ReviewForm />', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const renderReviewForm = ({ score, description }) => render((
    <ReviewForm
      score={score}
      description={description}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ));

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('renders score and description input controls', () => {
    const { getByLabelText } = renderReviewForm({
      score: '',
      description: '',
    });

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();
  });

  it('renders "리뷰 남기기" button', () => {
    const { getByText } = renderReviewForm({
      score: '',
      description: '',
    });

    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });

  context('with score and description', () => {
    it('it renders current score and description', () => {
      const { getByLabelText } = renderReviewForm({
        score: '5',
        description: 'Good!',
      });

      expect(getByLabelText('평점')).toHaveDisplayValue('5');
      expect(getByLabelText('리뷰 내용')).toHaveDisplayValue('Good!');
    });
  });

  context('without score and description', () => {
    it('it renders empty input controls', () => {
      const { getByLabelText } = renderReviewForm({
        score: '',
        description: '',
      });

      expect(getByLabelText('평점')).toHaveDisplayValue('');
      expect(getByLabelText('리뷰 내용')).toHaveDisplayValue('');
    });
  });

  describe('changes score and description input control', () => {
    it('listens change event', () => {
      const { getByLabelText } = renderReviewForm({
        score: '',
        description: '',
      });

      expect(handleChange).not.toBeCalled();

      fireEvent.change(getByLabelText('평점'), {
        target: { value: '5' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'score',
        value: '5',
      });

      fireEvent.change(getByLabelText('리뷰 내용'), {
        target: { value: 'Good!' },
      });

      expect(handleChange).toBeCalledWith({
        name: 'description',
        value: 'Good!',
      });
    });
  });

  describe('click "리뷰 남기기" button', () => {
    it('listens submit event', () => {
      const { getByText } = renderReviewForm({
        score: '',
        description: '',
      });

      expect(handleSubmit).not.toBeCalled();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(handleSubmit).toBeCalled();
    });
  });
});
