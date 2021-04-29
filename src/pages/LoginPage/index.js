import React, { useState, useEffect } from 'react';
import store from '../../app/store';

import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import PrimaryBtn from '../../common/components/primary-btn';
import SecondaryBtn from '../../common/components/secondary-btn';
import { loginUser } from '../../state/user/auth/authAction';

const LoginScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (store.getState().auth.isAuthenticated === true) {
      history.push('/home');
    }
  });
  const dispatchLoginAction = () => {
    dispatch(loginUser(email, password));
  };

  return (
    <form>
      <div className="input-container">
        <label className="email-label">E-mail</label>
        <input
          name="name"
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="password-label">Hasło</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PrimaryBtn handleClick={dispatchLoginAction}>Zaloguj</PrimaryBtn>
        <div>
          <SecondaryBtn className="forget-password" to="/passwordReset">
            Zapomniałeś hasła?{' '}
          </SecondaryBtn>
          <SecondaryBtn className="create-account" to="/register">
            Pierwszy raz tutaj? <b>Zarejestruj</b>
          </SecondaryBtn>
        </div>
      </div>
    </form>
  );
};

export default LoginScreen;
