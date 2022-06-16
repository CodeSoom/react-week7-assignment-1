import { setError, setLoading } from '../../apps/store/actions';

import fetchRegions from './regionApi';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
      key: 'regions',
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  };
}

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    try {
      dispatch(setLoading('regions', true));

      const regions = await fetchRegions();
      dispatch(setRegions(regions));
    } catch (error) {
      dispatch(setError('regions', error.message));
    }
  };
}
