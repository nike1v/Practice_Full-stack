import React, { useState  } from 'react';
import { useHistory } from 'react-router-dom';
import {  v4  } from 'uuid';

import {  books } from '../../constants/routes.js';
import { passSize, passDigits, passLower, passUpper } from '../../utils/passwordValidation';

import './login.css';

const Login = () => {

  const history = useHistory();
  const [errorPassword, setErrorPassword] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const validationCombine = (passwordValue) => (...functions) => functions.reduce((errorsList, func) => {
    const error = func(passwordValue);

    if(error){
      return [...errorsList, error];
    }
    return errorsList;
  }, []);
  
  const validPasswordLeght = (password) => {
    if (!password.match(passSize)) return 'Password must contain 6 or more symbols'
  }
  const validPasswordDigits = (password) => {
    if (!password.match(passDigits)) return "Password must contain at least one number"
  }
  const validPasswordLower = (password) => {
    if(!password.match(passLower)) return "Password must contain at least one lowecase symbol"
  }
  const validPasswordUpper = (password) => {
    if(!password.match(passUpper)) return "Password must contain at least one uppercase symbol"
  }
  
  const validatePassword = () => validationCombine(userPassword)(validPasswordDigits, validPasswordLeght, validPasswordLower, validPasswordUpper);

  const handlevalid = (event) => {
    event.preventDefault();
    const errors = validatePassword();

    if (errors.length){
      setErrorPassword(errors);
      return;
    }

    console.log('Pass OK');
    history.push(books);
  }

  const handleEmailChange = ({target}) => {
    setUserEmail(target.value);
    setErrorPassword([]);
  }
  const handlePasswordChange = ({target}) => {
    setUserPassword(target.value);
    setErrorPassword([]);
  }

  return (
    <main className='login'>
      <section className='loginFormLabel'>
        Here you can Login
        <span className='additionalFormText'>and buy books</span>
      </section>
      <form name='loginForm' className='loginForm' onSubmit={handlevalid}>
        <label>E-mail</label>
        <input type='email' placeholder='E-mail' className='formField e-mail' value={userEmail} onChange={handleEmailChange} required />
        <label>Password</label>
        <input type='password' placeholder='Password' value={userPassword} onChange={handlePasswordChange} required />
        {
          errorPassword.map(el => {
            return (
              <span key={v4()} className='error'>{el}</span>
            )
          })
        }
        <button type='submit'>Log In</button>
      </form>
    </main>
  )
}

export default Login;