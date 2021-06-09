import React from "react";
import { useState } from "react";
import SecondaryBtn from "../../common/components/SecondaryBtn/index"
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");

  const registerUser = () => {
    dispatch(RegisterUser(email, password, c_password));
  };
  return (
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="form-input"
          id="password"
          required
          fullWidth
          label="Hasło"
          variant="outlined"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
        <PrimaryBtn className="second-register-btn" handleClick={registerUser}>
          Zarejestruj
        </PrimaryBtn>
        <Link to="/">
          <CustomLink>
            Masz już konto? <b>Zaloguj</b>
          </CustomLink>
        </Link>
      </form>
    </Container>
  );
};

export default RegisterScreen;
