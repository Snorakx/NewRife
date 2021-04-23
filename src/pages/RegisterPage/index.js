import React from "react";
import { useState } from "react";
import PrimaryBtn from "../../common/components/primary-btn";
import SecondaryBtn from "../../common/components/secondary-btn";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "../../common/components/logo/logo-lg/index";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");

  const register = () => {
    const postData = {
      Email: email,
      Password: password,
      ConfirmPassword: c_password,
    };
    const requestOptions = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };
    fetch("https://localhost:44348/api/auth/register", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="form">
      <Logo />
      <div className="input-container">
        <label className="pure-material-textfield-outlined">
          <input
            placeholder=" "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email *</span>
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            placeholder=" "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Hasło *</span>
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            placeholder=" "
            type="password"
            value={c_password}
            onChange={(e) => setC_Password(e.target.value)}
          />
          <span>Powtórz hasło *</span>
        </label>

        <PrimaryBtn className="second-register-btn" handleClick={register}>
          Zarejestruj
        </PrimaryBtn>
        <Link to="/" className="link">
            Masz już konto? <b>Zaloguj</b>
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
