import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = {
  cartItemList: [],
  order: [],
  total: 0,
};

const cartItemToggler = (item, state) => {
  const findId = state.find(({ id }) => id === item.id);
  if (findId) {
    return state.filter(({ id }) => id !== item.id);
  }
  return [...state, item];
};

const cartItemCountChange = (payload, state) =>
  state.map((cartItem) =>
    cartItem.id === payload.id
      ? {
          ...cartItem,
          count: payload.count,
        }
      : { ...cartItem }
  );

const cartStore = handleActions(
  {
    [actions.toggleItemInCart]: (state, action) => ({
      ...state,
      cartItemList: cartItemToggler(action.payload, state.cartItemList),
    }),
    [actions.orderCreate]: (state, action) => ({
      ...state,
      order: action.payload,
    }),
    [actions.setTotalCheck]: (state, action) => ({
      ...state,
      total: action.payload,
    }),
    [actions.setItemCount]: (state, action) => ({
      ...state,
      cartItemList: cartItemCountChange(action.payload, state.cartItemList),
    }),
    [actions.setCartItemList]: (state, action) => ({
      ...state,
      cartItemList: action.payload,
    }),
  },
  initialState
);

export default cartStore;
