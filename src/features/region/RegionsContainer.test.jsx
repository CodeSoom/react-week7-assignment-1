import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import REGIONS from '../../../fixtures/regions';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  const SEOUL = REGIONS[0];

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with loading', () => {
    it('renders "로딩중..."', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: {
          isLoading: true,
          data: [],
        },
      }));
      const { queryByText } = render((
        <RegionsContainer />
      ));
      expect(queryByText('로딩중...')).toBeInTheDocument();
    });
  });

  context('with error', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: {
        isError: true,
        errorMessage: '에러가 발생했습니다.',
        data: [],
      },
    }));
    const { queryByText } = render((
      <RegionsContainer />
    ));
    expect(queryByText('에러: 에러가 발생했습니다.')).toBeInTheDocument();
  });

  context('with selectedRegion', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: {
          data: REGIONS,
        },
        selectedRegion: SEOUL,
      }));
    });

    it('renders regions with selected region', () => {
      const { container } = render((
        <RegionsContainer />
      ));

      expect(container).toHaveTextContent(`${SEOUL.name}(V)`);
    });
  });

  context('without selectedRegion', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        regions: {
          data: REGIONS,
        },
      }));
    });

    it('renders regions', () => {
      const { container, getByText } = render((
        <RegionsContainer />
      ));

      expect(container).toHaveTextContent(SEOUL.name);

      fireEvent.click(getByText(SEOUL.name));

      expect(dispatch).toBeCalled();
    });
  });
});
