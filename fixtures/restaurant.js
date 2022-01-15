const restaurant = {
  id: 1,
  name: '마법사주방',
  address: '서울시',
  menuItems: [
    { id: 1, name: '떡볶이' },
  ],
  reviews: [
    {
      id: 1,
      restaurantId: 1,
      name: '냥냥이',
      score: 5,
      description: 'good',
    },
    {
      id: 2,
      restaurantId: 1,
      name: '멍멍이',
      score: 1,
      description: '가지말자',
    },
  ],
};

export default restaurant;
