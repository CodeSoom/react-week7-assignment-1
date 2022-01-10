import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewContainer from './ReviewContainer';

import {
  changeReviewField,
} from '../modules/actions';

jest.mock('react-redux');

describe('ReviewContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('when logged out', () => {
    given('accessToken', () => null);

    it('renders noting', () => {
      const { container } = render((
        <ReviewContainer />
      ));

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders inputs and button', () => {
      const { queryByLabelText, queryByRole } = render((
        <ReviewContainer />
      ));

      expect(queryByLabelText('평점')).toBeInTheDocument();
      expect(queryByLabelText('리뷰 내용')).toBeInTheDocument();
      expect(queryByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();
    });

    it('types input, calls dispath with changeReviewField', () => {
      const { getByLabelText } = render((
        <ReviewContainer />
      ));

      const controls = [
        { label: '평점', name: 'score', value: '5' },
        { label: '리뷰 내용', name: 'description', value: '맛있어요!' },
      ];

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith(
          changeReviewField({ name, value }),
        );
      });
    });

    // TODO: 리뷰 남기기 버튼 클릭하면 리뷰 post 이벤트 호출 (dispatch 기능)
    it('clicks button, calls dispatch', () => {
      // THINK: with thunk 함수 테스트 할지 말지 계속 고민중..
      const { getByRole } = render((
        <ReviewContainer />
      ));

      fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

      expect(dispatch).toBeCalled();
    });
  });
});
