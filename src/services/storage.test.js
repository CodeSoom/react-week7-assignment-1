import { loadItem } from './storage';

jest.mock('./storage');

describe('storage', () => {
  const accessToken = 'ACCESS_TOKEN';

  beforeEach(() => {
    loadItem.mockImplementation(() => accessToken);
  });

  it('loadItem', () => {
    const item = loadItem();

    expect(item).toEqual(accessToken);
  });
});
