import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { connect } from 'react-redux';
import Input from '../Input/Input';
import { setCheckoutUrl } from '../../constants/serverUrl';
import { postData } from '../../api/HTTPSRequests';
import { books, cart } from '../../constants/routes';
import cartPropType from '../../propTypes/cartPropTypes';
import { setCart } from '../Books/actions';
import { setCartItemList } from '../Cart/actions';
import { API_MAPS } from '../../constants/apiKeys';

import 'react-phone-input-2/lib/style.css';
import './modalCheckout.css';

const ModalCheckout = ({
  isModalOpen,
  setModalIsOpen,
  setCartItemList,
  setCart,
  cartItemList,
}) => {
  const date = new Date().getTimezoneOffset() * 60000;
  const today = new Date(Date.now() - date).toISOString().substr(0, 16);
  const [userAddress, setUserAddress] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userDeliveryDate, setUserDeliveryDate] = useState(today);
  const history = useHistory();
  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '500px',
      width: '40%',
      border: 'solid 2px rgb(160 160 160)',
      borderRadius: '5px',
    },
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    history.push(cart);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkList = {
      City: userCity,
      Address: userAddress.label,
      Phone: userPhone,
      DeliveryDate: Date.parse(userDeliveryDate),
    };
    checkList.orderedGoods = cartItemList.reduce(
      (result, cartItem) => ({
        [cartItem.id]: cartItem.count,
        ...result,
      }),
      {}
    );
    postData(setCheckoutUrl, checkList).then((response) => {
      if (response.status === 201 || response.ok) {
        setCartItemList([]);
        setCart([]);
        history.push(books);
      }
    });
  };

  const handlePhoneChange = (event) => {
    setUserPhone(event);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      style={customStyles}
      contentLabel="example">
      <form className="checkoutForm" onSubmit={handleSubmit}>
        <div className="modalTitle">Checkout form</div>
        <Input
          label="City: "
          type="text"
          value={userCity}
          onChange={setUserCity}
        />
        <label className="formLabelAddress">
          Address:
          <GooglePlacesAutocomplete
            apiKey={API_MAPS}
            selectProps={{
              onChange: setUserAddress,
              value: userAddress,
            }}
            minLengthAutocomplete={2}
            debounce={300}
          />
        </label>
        <label className="formLabel">
          Phone:
          <PhoneInput
            country="ua"
            inputProps={{
              required: true,
            }}
            onChange={handlePhoneChange}
            value={userPhone}
          />
        </label>
        <Input
          label="Delivery date: "
          type="datetime-local"
          value={userDeliveryDate}
          onChange={setUserDeliveryDate}
        />
        <button type="submit" className="modalSubmit">
          Submit
        </button>
      </form>
    </Modal>
  );
};

ModalCheckout.propTypes = {
  setModalIsOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setCartItemList: PropTypes.func.isRequired,
  setCart: PropTypes.func.isRequired,
  cartItemList: PropTypes.arrayOf(cartPropType).isRequired,
};

export default connect(null, { setCartItemList, setCart })(ModalCheckout);
