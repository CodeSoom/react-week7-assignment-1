import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  changeReviewField,
  logout,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      accessToken: '',
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      loginFields: {
        email: '',
        password: '',
      },
      reviewFields: {
        score: '',
        description: '',
      },
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    const initialState = {
      restaurant: null,
      reviewFields: {
        score: 'tester@example.com',
        description: 'test',
      },
    };

    const restaurant = { id: 1, name: '마법사주방' };

    const setRestaurantsReducer = () => reducer(
      initialState,
      setRestaurant(restaurant),
    );

    it('changes restaurant', () => {
      const state = setRestaurantsReducer();

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });

    it('delete reviewFields texts', () => {
      const { reviewFields: { score, description } } = setRestaurantsReducer();

      expect(score).toBe('');
      expect(description).toBe('');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('changeLoginField', () => {
    const initialState = {
      loginFields: {
        email: 'email',
        password: 'password',
      },
    };

    const changeLoginFieldReducer = ({ name, value }) => reducer(
      initialState,
      changeLoginField({ name, value }),
    );

    context('when email is changed', () => {
      const { name, value } = {
        name: 'email',
        value: 'tester@example.com',
      };

      it("change email and doesn't change password", () => {
        const { loginFields } = changeLoginFieldReducer({ name, value });

        const { email, password } = loginFields;

        expect(email).toBe('tester@example.com');

        expect(password).toBe('password');
      });
    });

    context('when password is changed', () => {
      const { name, value } = {
        name: 'password',
        value: 'test',
      };

      it("doesn't change email and change password", () => {
        const { loginFields } = changeLoginFieldReducer({ name, value });

        const { email, password } = loginFields;

        expect(email).toBe('email');
        expect(password).toBe('test');
      });
    });
  });

  describe('setAccessToken', () => {
    const initialState = {
      accessToken: '',
      loginFields: {
        email: 'tester@example.com',
        password: 'test',
      },
    };
    const setAccessTokenReducer = () => reducer(
      initialState,
      setAccessToken('TOKEN'),
    );

    it('create accessToken', () => {
      const { accessToken } = setAccessTokenReducer();
      expect(accessToken).toBe('TOKEN');
    });

    it('delete loginFields texts', () => {
      const { loginFields: { email, password } } = setAccessTokenReducer();
      expect(email).toBe('');
      expect(password).toBe('');
    });
  });

  describe('changeReviewField', () => {
    const initialState = {
      reviewFields: {
        score: '',
        description: '',
      },
    };

    const reviewInput = [
      { name: 'score', value: '5' },
      { name: 'description', value: 'Good!' },
    ];

    reviewInput.forEach(({ name, value }) => {
      const state = reducer(
        initialState,
        changeReviewField({ name, value }),
      );

      expect(state.reviewFields[name]).toBe(value);
    });
  });

  describe('logout', () => {
    it('delete accessToken', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };
      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe('');
    });
  });
});
