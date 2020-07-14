import React from 'react';

import { useSelector } from 'react-redux';

import LinkList from '../components/LinkList';

import { get } from '../utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  const restaurantsWithLink = restaurants.map((restaurant) => ({
    ...restaurant,
    link: `/restaurants/${restaurant.id}`,
  }));

  return (
    <LinkList items={restaurantsWithLink} />
  );
}
