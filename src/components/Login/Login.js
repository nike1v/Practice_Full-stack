import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {books} from '../../constatnts/routes.js';
import './login.css';

const Login = () => {

  const history = useHistory();
  const [errorShow, setErrorShow] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');

  const passwordValidationSize = /[0-9a-zA-Z]{6,}/;
  const passwordValidationDigits = /(?=.*[0-9])/;
  const passwordValidationLower = /(?=.*[a-z])/;
  const passwordValidationUpper = /(?=.*[A-Z])/;
  

  const handlevalid = (event) => {
    event.preventDefault();
    if (userPassword.match(passwordValidationSize)&userPassword.match(passwordValidationDigits)&userPassword.match(passwordValidationLower)&userPassword.match(passwordValidationUpper)){
      console.log('pass OK');
      history.push(books);
    }
    switch (!userPassword.match){
      case passwordValidationSize:
        console.log('123');
    }
    setErrorPassword('Error in password');

    setErrorShow('active')
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
        <span className={`error ${errorShow}`}>{errorPassword}</span>
        <button type='submit'>Log In</button>
      </form>
    </main>
  )
}

export default Login;