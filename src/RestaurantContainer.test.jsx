import React from 'react';

import { fireEvent, getByText, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('dispatches action', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('without restaurant', () => {
    beforeEach(() =>{
      useSelector.mockImplementation((selector) => selector({
        reviewFields: {
          score: '',
          description: '',
        },
        accessToken: given.accessToken,
      }));
    });
    given('restaurant', () => null);
    it('renders loading text', () => {
      const { container } = renderRestaurantContainer();
      expect(container).toHaveTextContent('Loading...');
    });
  });

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          id: 1,
          name: '마법사주방',
          address: '서울시 강남구',
          reviews: [
            {
              id: 1,
              restaurantId: 1,
              name: '테스터',
              score: 5,
              description: '훌륭하다 훌륭하다 지구인놈들'
            },
          ],
        },
        reviewFields: {
          score: '',
          description: '',
        },
        accessToken: given.accessToken,
      }));
    });
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      
    }));

    context('with reviews', () => {
      it('renders reviews', () => {
        const { container } = renderRestaurantContainer();
        expect(container).toHaveTextContent('리뷰');
        expect(container).toHaveTextContent('훌륭하다 훌륭하다 지구인놈들');
      });
    });

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
    });

    context('without logged-in', () => {
      it('renders not review write field', () => {
        const { queryByLabelText } = render(
          <RestaurantContainer restaurantId="1" />
        );
  
        expect(queryByLabelText('평점')).toBeNull();
        expect(queryByLabelText('리뷰 내용')).toBeNull();
      });
    });

    context('with logged-in', () => {
      //TODO: accessToken 세팅
      given('accessToken', () => 'ACCESS_TOKEN');
      it('renders review write fields', () => {
        const { queryByLabelText } = render(
          <RestaurantContainer restaurantId="1" />
        );
  
        expect(queryByLabelText('평점')).not.toBeNull();
        expect(queryByLabelText('리뷰 내용')).not.toBeNull();
      });
  
      it('listens change events', () => {
        const { queryByLabelText } = render(
          <RestaurantContainer
          restaurantId="1" />
        );
  
        const controls = [
          { label: '평점', name: 'score', value: '5' },
          { label: '리뷰 내용', name: 'description', value: '리뷰 내용 :)' },
        ];
  
        controls.forEach(({ label, name, value }) => {
          fireEvent.change(queryByLabelText(label), {
            target: { value },
          });
    
          expect(dispatch).toBeCalledWith({
            type: 'changeReviewField',
            payload: { name, value }
          });
        });
      });
      it('renders "리뷰 남기기" button', () => {
        const { getByText } = render(
          <RestaurantContainer restaurantId="1" />
        );
        
        fireEvent.click(getByText('리뷰 남기기'));
        
        expect(dispatch).toBeCalledTimes(2);
      });
    });
  });
});
