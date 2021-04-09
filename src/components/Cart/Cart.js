import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useLocation, useHistory } from 'react-router-dom';

import cartPropType from '../../propTypes/cartPropTypes';
import CartItem from '../CartItem/CartItem';
import { setTotalCheck } from './actions';
import { cart, modalCheckout } from '../../constants/routes';
import ModalCheckout from '../ModalCheckout/ModalCheckout';

import './cart.css';

const Cart = ({ cartItemList, setTotalCheck, total }) => {
  useEffect(() => {
    cartCheck();
  }, [cartItemList]);

  useEffect(() => {
    if (!isModalOpen) {
      history.push(cart);
    }
  }, []);

  const location = useLocation();
  const history = useHistory();
  const [isModalOpen, setModalIsOpen] = useState(false);

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
    setModalIsOpen(true);
  };

  return (
    <main className="cart">
      <ModalCheckout
        isModalOpen={isModalOpen}
        setModalIsOpen={setModalIsOpen}
        cartItemList={cartItemList}
      />
      {cartItemList.length ? (
        renderCartItems()
      ) : (
        <div className="emptyCart">
          Nothing here now! <span>Please add some goods in your cart!</span>
        </div>
      )}
      <section className="checkoutBox">
        <Link
          className="checkoutLink"
          to={{
            pathname: modalCheckout,
            state: { background: location },
          }}>
          <button
            type="button"
            className="checkoutButton"
            onClick={handleCheckout}
            disabled={!cartItemList.length}>
            Checkout
          </button>
        </Link>
        <div className="totalCheck">Total: {total}$</div>
      </section>
    </main>
  );
};

Cart.propTypes = {
  cartItemList: PropTypes.arrayOf(cartPropType).isRequired,
  setTotalCheck: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = ({ cartStore: { cartItemList, total } }) => ({
  cartItemList,
  total,
});

export default connect(mapStateToProps, {
  setTotalCheck,
})(Cart);
