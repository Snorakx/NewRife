import React from 'react';
import { useState } from 'react';
import PrimaryBtn from '../../common/components/primary-btn';
import SecondaryBtn from '../../common/components/secondary-btn';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../../state/user/auth/authAction';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setC_Password] = useState('');

  const registerUser = () => {
    dispatch(RegisterUser(email, password, c_password));
  };
  return (
    <form>
      <div className="input-container">
        <label className="another-label">E-mail</label>
        <input
          className="another-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="another-label">Hasło</label>
        <input
          className="another-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="another-label">Powtórz hasło</label>
        <input
          className="another-input"
          type="password"
          value={c_password}
          onChange={(e) => setC_Password(e.target.value)}
        />
        <PrimaryBtn className="second-register-btn" handleClick={registerUser}>
          Zarejestruj
        </PrimaryBtn>
        <Link to="/">
          <SecondaryBtn>
            Masz już konto? <b>Zaloguj</b>
          </SecondaryBtn>
        </Link>
      </div>
    </form>
  );
};

export default RegisterScreen;
