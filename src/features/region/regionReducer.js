import { equal } from '../../apps/utils';

export const regionState = {
  regions: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    data: [],
  },
  selectedRegion: null,
};

export const regionReducers = {
  setRegions(state, {
    payload: {
      regions, key, isLoading, isError, errorMessage,
    },
  }) {
    return {
      ...state,
      regions,
      [key]: {
        ...state[key],
        isLoading,
        isError,
        errorMessage,
        data: regions,
      },
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.data.find(equal('id', regionId)),
    };
  },
};
