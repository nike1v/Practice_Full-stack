import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import cartPropType from '../../propTypes/cartPropTypes';
import { toggleItemInCart, setItemCount } from '../Cart/actions';
import { toggleCart } from '../Books/actions';

import './cartitem.css';

const CartItem = ({ cartItem, toggleItemInCart, toggleCart, setItemCount }) => {
  const {
    id,
    bookName,
    authorName,
    price,
    /* currency, */
    currencyMark,
    image,
    shortDescription,
    longDescription,
    count,
  } = cartItem;

  const handleItemRemove = () => {
    toggleCart(id);
    toggleItemInCart(cartItem);
  };

  const handleIncreaseItemCount = () => {
    const payload = { count: count + 1, id: cartItem.id };
    setItemCount(payload);
  };

  const handleDecreaseItemCount = () => {
    const payload = { count: count - 1, id: cartItem.id };
    setItemCount(payload);
  };

  return (
    <section className="cartItem">
      <img className="cartItemImage" alt="bookImage" src={image} />
      <section className="cartItemText">
        <div className="cartItemTitle">
          {bookName} {'-'} {authorName}
        </div>
        <div className="cartItemDescription">
          {longDescription}
          {shortDescription}
        </div>
      </section>
      <section className="cartItemPrice">
        <div className="cartItemValue">
          {currencyMark}
          {price * count}
        </div>
        <div className="countCartItem">
          <button
            type="button"
            className="countButton"
            onClick={handleDecreaseItemCount}>
            -
          </button>
          {count}
          <button
            type="button"
            className="countButton"
            onClick={handleIncreaseItemCount}>
            +
          </button>
        </div>
        <button
          type="button"
          className="cartItemRemove"
          onClick={handleItemRemove}>
          Remove
        </button>
      </section>
    </section>
  );
};

CartItem.propTypes = {
  cartItem: cartPropType.isRequired,
  toggleItemInCart: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired,
  setItemCount: PropTypes.func.isRequired,
};

export default connect(null, {
  toggleItemInCart,
  toggleCart,
  setItemCount,
})(CartItem);
