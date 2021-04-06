import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = {
  isLoading: false,
};

const loaderStore = handleActions(
  {
    [actions.toggleLoader]: (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
  },
  initialState
);

export default loaderStore;
