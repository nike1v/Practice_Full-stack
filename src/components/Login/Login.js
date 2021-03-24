import React, { useState  } from 'react';
import { useHistory } from 'react-router-dom';
import {  books } from '../../constatnts/routes.js';
import { passSize, passDigits, passLower, passUpper } from '../../utils/passwordValidation';
import './login.css';
import {  v4  } from 'uuid';

const Login = () => {

  const history = useHistory();
  const [errorPassword, setErrorPassword] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  
  const validPasswordLeght = (password) => {
    if (password.match(passSize)){
      return true;
    }else {
      setErrorPassword((prev) => [...prev, 'Password must contain 6 or more symbols']);
      return false;
    }
  }
  const validPasswordDigits = (password) => {
    if (password.match(passDigits)) {
      return true;
    } else {
      setErrorPassword((prev) => [...prev, "Password must contain at least one number"]);
      return false;
    }
  }
  const validPasswordLower = (password) => {
    if(password.match(passLower)){
      return true;
    } else {
      setErrorPassword((prev) => [...prev, "Password must contain at least one lowecase symbol"]);
      return false;
    }
  }
  const validPasswordUpper = (password) => {
    if(password.match(passUpper)) {
      return true;
    } else {
      setErrorPassword((prev) => [...prev, "Password must contain at least one uppercase symbol"]);
      return false;
    }
  }

  const handlevalid = (event) => {
    event.preventDefault();
    validPasswordDigits(userPassword);
    validPasswordLeght(userPassword);
    validPasswordLower(userPassword);
    validPasswordUpper(userPassword);
    if (!errorPassword.length){
      console.log('Pass OK');
      history.push(books);
    }
  }

  const handleEmailChange = ({target}) => {
    setUserEmail(target.value);
    setErrorPassword([]);
  }
  const handlePasswordChange = ({target}) => {
    setuserPassword(target.value);
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