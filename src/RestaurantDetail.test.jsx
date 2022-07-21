import { fireEvent, render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

describe('RestaurantDetail', () => {
  const handleChangeReviewForm = jest.fn();

  beforeEach(() => {
    handleChangeReviewForm.mockClear();
  });

  const restaurant = {
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
  };

  const renderRestaurantDetail = () => render(
    <RestaurantDetail
      restaurant={restaurant}
      onChangeReviewForm={handleChangeReviewForm}
    />,
  );

  it('renders name and address', () => {
    const { container } = renderRestaurantDetail();

    expect(container).toHaveTextContent('마법사주방');
    expect(container).toHaveTextContent('서울시');
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
});
