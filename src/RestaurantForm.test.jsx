// 관심사: 상태그려주기
import { render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

describe('RestaurantForm', () => {
  const renderRestaurantForm = () => render((
    <RestaurantForm />
  ));

  it('renders input with "평점" label', () => {
    const { getByLabelText } = renderRestaurantForm();

    expect(getByLabelText('평점')).toBeInTheDocument();
  });

  it('renders input with "리뷰 내용" label', () => {
    const { getByLabelText } = renderRestaurantForm();

    expect(getByLabelText('리뷰 내용')).toBeInTheDocument();
  });

  it('renders "리뷰 남기기" button ', () => {
    const { getByText } = renderRestaurantForm();

    expect(getByText('리뷰 남기기')).toBeInTheDocument();
  });
});
