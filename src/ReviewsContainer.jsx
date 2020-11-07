import React from 'react';

import { useSelector } from 'react-redux';

import Reviews from './Reviews';

import { get } from './utils';

export default function ReviewsContainer() {
  const { reviews } = useSelector(get('restaurant'));

  return (
    <Reviews
      reviews={reviews}
    />
  );
}
