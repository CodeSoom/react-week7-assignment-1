import { saveItem, loadItem } from './storage';

describe('storage', () => {
  const mockStorage = () => {
    global.localStorage = jest.fn().mockResolvedValue({
      setItem() { return undefined; },
      getItem() { return 'VALUE'; },
    });
  };

  beforeEach(() => {
    mockStorage();
  });

  describe('saveItem', () => {
    it('returns nothing', () => {
      const data = saveItem('KEY', 'VALUE');

      expect(data).toBeUndefined();
    });
  });

  describe('loadItem', () => {
    it('returns value', () => {
      const data = loadItem('KEY');

      expect(data).toBe('VALUE');
    });
  });
});
