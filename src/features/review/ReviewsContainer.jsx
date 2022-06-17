import { useSelector } from 'react-redux';

import { get } from '../../apps/utils';

import Reviews from './Reviews';

export default function ReviewsContainer() {
  const { data: reviews } = useSelector(get('reviews'));

  return (
    <Reviews reviews={reviews} />
  );
}
