import mockAxios from 'jest-mock-axios';

import { createReview } from './reviewApi';

jest.mock('axios');

describe('reviewApi', () => {
  const mockCreateReview = () => mockAxios.post.mockResolvedValue({ data: {}, status: 201 });
  context('with success', () => {
    beforeEach(() => {
      mockCreateReview();
    });

    it('returns accessToken', async () => {
      const response = await createReview(5, '맛있엉', 1, 'accessToken');

      expect(response.status).toBe(201);
    });
  });
});
