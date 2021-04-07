import { createAction } from 'redux-actions';

export const toggleItemInCart = createAction('TOGGLE_ITEM_IN_CART');
export const orderCreate = createAction('ORDER_CREATE');
export const setTotalCheck = createAction('SET_TOTAL_CHECK');
export const setItemCount = createAction('INCREASE_ITEM_COUNT');
export const setCartItemList = createAction('SET_CART_ITEM_LIST');
