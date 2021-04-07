import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import cartPropType from '../../propTypes/cartPropTypes';
import CartItem from '../CartItem/CartItem';
import { setTotalCheck, setCartItemList } from './actions';
import { setCart } from '../Books/actions';
import { postData } from '../../api/HTTPSRequests';
import { setCheckout } from '../../constants/serverUrl';
import { books } from '../../constants/routes';

import './cart.css';

const Cart = ({
  cartItemList,
  setTotalCheck,
  total,
  setCartItemList,
  setCart,
}) => {
  const history = useHistory();
  useEffect(() => {
    cartCheck();
  }, [cartItemList]);

  const renderCartItems = () =>
    cartItemList.map((cartItem) => (
      <CartItem key={cartItem.id} cartItem={cartItem} />
    ));

  const cartCheck = () => {
    const totalCheck = cartItemList.reduce(
      (result, cartItem) => cartItem.price * cartItem.count + result,
      0
    );
    setTotalCheck(totalCheck);
  };

  const handleCheckout = () => {
    const checkList = cartItemList.map(({ id, count }) => ({
      [id]: count,
    }));
    postData(setCheckout, checkList).then((response) => {
      if (response.status === 201 || response.ok) {
        setCartItemList([]);
        setCart([]);
        history.push(books);
      }
    });
  };

  return (
    <main className="cart">
      {cartItemList.length ? (
        renderCartItems()
      ) : (
        <div className="emptyCart">
          Nothing here now! <span>Please add some goods in your cart!</span>
        </div>
      )}
      <section className="checkoutBox">
        <button
          type="button"
          className="checkoutButton"
          onClick={handleCheckout}
          disabled={!cartItemList.length}>
          Checkout
        </button>
        <div className="totalCheck">Total: {total}$</div>
      </section>
    </main>
  );
};

Cart.propTypes = {
  cartItemList: PropTypes.arrayOf(cartPropType).isRequired,
  setTotalCheck: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  setCartItemList: PropTypes.func.isRequired,
  setCart: PropTypes.func.isRequired,
};

const mapStateToProps = ({ cartStore: { cartItemList, total } }) => ({
  cartItemList,
  total,
});

export default connect(mapStateToProps, {
  setTotalCheck,
  setCartItemList,
  setCart,
})(Cart);
