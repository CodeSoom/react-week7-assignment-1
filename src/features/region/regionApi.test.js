import mockAxios from 'jest-mock-axios';

import REGIONS from '../../../fixtures/regions';

import fetchRegions from './regionApi';

jest.mock('axios');

describe('fetchRegions', () => {
  const mockFetch = (data) => mockAxios.get.mockResolvedValue({ data });
  beforeEach(() => {
    mockFetch(REGIONS);
  });

  it('returns regions', async () => {
    const regions = await fetchRegions();

    expect(regions).toEqual(REGIONS);
  });
});
