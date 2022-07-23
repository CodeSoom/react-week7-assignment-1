import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import RESTAURANT from '../fixtures/restaurant';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const handleChangeReviewForm = jest.fn();
  const handleSubmitReviewForm = jest.fn();

  beforeEach(() => {
    handleChangeReviewForm.mockClear();
    handleSubmitReviewForm.mockClear();
  });

  given('reviewFields', () => ({
    score: '',
    description: '',
  }));

  const renderRestaurantDetail = () => render(
    <RestaurantDetail
      reviewFields={given.reviewFields}
      restaurant={RESTAURANT}
      onChangeReviewForm={handleChangeReviewForm}
      onSubmitReviewForm={handleSubmitReviewForm}
    />,
  );

  it('renders name and address', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('마녀주방');
    expect(container).toHaveTextContent('서울시');
  });

  it('renders reviews', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('5');
    expect(container).toHaveTextContent('Good!');
  });

  it('renders review form', () => {
    const { getByLabelText, getByText } = renderRestaurantDetail();

    expect(getByLabelText('평점')).toBeInTheDocument();
    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();
    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });

  describe('changes input controls in review form', () => {
    it('calls onChangeReviewForm', () => {
      const { getByLabelText } = renderRestaurantDetail();

      expect(handleChangeReviewForm).not.toBeCalled();

      fireEvent.change(getByLabelText('평점'), {
        target: { value: '5' },
      });

      fireEvent.change(getByLabelText('리뷰 내용'), {
        target: { value: 'Good!' },
      });

      expect(handleChangeReviewForm).toBeCalledTimes(2);
    });
  });

  context('with score and description', () => {
    given('reviewFields', () => ({
      score: '5',
      description: 'Good!',
    }));

    it('it renders current score and description', () => {
      const { getByLabelText } = renderRestaurantDetail();

      expect(getByLabelText('평점')).toHaveDisplayValue('5');
      expect(getByLabelText('리뷰 내용')).toHaveDisplayValue('Good!');
    });
  });

  context('without score and description', () => {
    given('reviewFields', () => ({
      score: '',
      description: '',
    }));

    it('it renders empty score and description', () => {
      const { getByLabelText } = renderRestaurantDetail();

      expect(getByLabelText('평점')).toHaveDisplayValue('');
      expect(getByLabelText('리뷰 내용')).toHaveDisplayValue('');
    });
  });

  describe('click "리뷰 남기기" button', () => {
    it('listens submit event', () => {
      const { getByText } = renderRestaurantDetail();

      expect(handleSubmitReviewForm).not.toBeCalled();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(handleSubmitReviewForm).toBeCalled();
    });
  });
});
