import mockAxios from 'jest-mock-axios';

import CATEGORIES from '../../../fixtures/categories';

import fetchCategories from './categoryApi';

jest.mock('axios');

describe('fetchCategories', () => {
  const mockFetch = (data) => mockAxios.get.mockResolvedValue({ data });
  beforeEach(() => {
    mockFetch(CATEGORIES);
  });

  it('returns categories', async () => {
    const categories = await fetchCategories();

    expect(categories).toEqual(CATEGORIES);
  });
});
