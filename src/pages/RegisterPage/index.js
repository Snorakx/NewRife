import React from "react";
import { useState } from "react";
<<<<<<< Updated upstream
import PrimaryBtn from "../../common/components/primary-btn";
import SecondaryBtn from "../../common/components/secondary-btn";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "../../common/components/logo/logo-lg/index";

const RegisterScreen = () => {
=======
import PrimaryBtn from "../../common/components/PrimaryBtn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../state/user/auth/authAction";
import TextField from "@material-ui/core/TextField";
import CustomLink from "../../common/components/CustomLink/index";
import Container from "@material-ui/core/Container";
import Logo from "../../common/components/logo/logo-lg";
import "./style.scss";

const RegisterScreen = () => {
  const dispatch = useDispatch();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div className="form">
      <Logo />
      <div className="input-container">
        <label className="pure-material-textfield-outlined">
          <input
            placeholder=" "
=======
    <Container component="main" maxWidth="xs">
        <form autoComplete="off">
          <Logo />
          <TextField
            className="form-input"
            id="e-mail"
            margin="normal"
            required
            fullWidth
            label="E-mail"
            variant="outlined"
            name="email"
            autoComplete="email"
            autoFocus
>>>>>>> Stashed changes
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
<<<<<<< Updated upstream
          <span>Email *</span>
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            placeholder=" "
=======
          <TextField
            className="form-input"
            id="password"
            required
            fullWidth
            label="Hasło"
            variant="outlined"
            name="password"
>>>>>>> Stashed changes
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
<<<<<<< Updated upstream
          <span>Hasło *</span>
        </label>

        <label className="pure-material-textfield-outlined">
          <input
            placeholder=" "
=======
          <TextField
            className="form-input"
            id="repeat-password"
            margin="normal"
            required
            fullWidth
            label="Powtórz hasło"
            variant="outlined"
            name="repeat-password"
            autoFocus
>>>>>>> Stashed changes
            type="password"
            value={c_password}
            onChange={(e) => setC_Password(e.target.value)}
          />
<<<<<<< Updated upstream
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
=======

          <PrimaryBtn
            className="second-register-btn"
            handleClick={registerUser}
          >
            Zarejestruj
          </PrimaryBtn>
          <Link to="/">
            <CustomLink>
              Masz już konto? <b>Zaloguj</b>
            </CustomLink>
          </Link>
        </form>
    </Container>
>>>>>>> Stashed changes
  );
};

export default RegisterScreen;
