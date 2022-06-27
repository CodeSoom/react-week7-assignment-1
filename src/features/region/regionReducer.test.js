import reducer from '../../apps/store/reducer';
import { selectRegion, setRegions } from './regionActions';

describe('regionReducer', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: [],
        },
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions.data).toEqual(regions);
    });
  });
  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: {
          data: [
            { id: 1, name: '서울' },
          ],
        },
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });
});
