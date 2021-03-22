import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {books} from '../../constatnts/routes.js';
import './login.css';

const Login = () => {

  const history = useHistory();
  const [errorShow, setErrorShow] = useState('');
  const [errorPasswordLength, setErrorPasswordLength] = useState('');
  const [errorPasswordDigits, setErrorPasswordDigits] = useState('');
  const [errorPasswordLower, setErrorPasswordLower] = useState('');
  const [errorPasswordUpper, setErrorPasswordUpper] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');

  const passwordValidationSize = /[0-9a-zA-Z]{6,}/;
  const passwordValidationDigits = /(?=.*[0-9])/;
  const passwordValidationLower = /(?=.*[a-z])/;
  const passwordValidationUpper = /(?=.*[A-Z])/;
  
  const validPasswordLeght = (password) => {
    if (password.match(passwordValidationSize)){
      setErrorPasswordLength('');
      return true;
    }else {
      setErrorPasswordLength('Password must contain 6 or more symbols');
      setErrorShow('active');
    }
  }
  const validPasswordDigits = (password) => {
    if (password.match(passwordValidationDigits)) {
      setErrorPasswordDigits('');
      return true;
    } else {
      setErrorPasswordDigits("Password must contain at least one number");
      setErrorShow('active');
    }
  }
  const validPasswordLower = (password) => {
    if(password.match(passwordValidationLower)){
      setErrorPasswordLower('');
      return true;
    } else {
      setErrorPasswordLower("Password must contain at least one lowecase symbol");
      setErrorShow('active');
    }
  }
  const validPasswordUpper = (password) => {
    if(password.match(passwordValidationUpper)) {
      setErrorPasswordUpper('');
      return true;
    } else {
      setErrorPasswordUpper("Password must contain at least one uppercase symbol");
      setErrorShow('active');
    }
  }

  const handlevalid = (event) => {
    event.preventDefault();
    validPasswordDigits(userPassword);
    validPasswordLeght(userPassword);
    validPasswordLower(userPassword);
    validPasswordUpper(userPassword);
    if (validPasswordUpper(userPassword) && validPasswordLower(userPassword) && validPasswordLeght(userPassword) && validPasswordDigits(userPassword)){
      console.log('Pass OK');
      history.push(books);
    }
  }

  const handleEmailChange = ({target}) => {
    setUserEmail(target.value);
  }
  const handlePasswordChange = ({target}) => {
    setuserPassword(target.value);
    setErrorShow('');
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
        <span className={`error ${errorShow}`}>{errorPasswordLength}</span>
        <span className={`error ${errorShow}`}>{errorPasswordDigits}</span>
        <span className={`error ${errorShow}`}>{errorPasswordLower}</span>
        <span className={`error ${errorShow}`}>{errorPasswordUpper}</span>
        <button type='submit'>Log In</button>
      </form>
    </main>
  )
}

export default Login;