import React from "react";
import { useState } from "react";
import SecondaryBtn from "../../common/components/SecondaryBtn/index";
import PrimaryBtn from "../../common/components/PrimaryBtn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../state/user/auth/authAction";
import TextField from "@material-ui/core/TextField";
import CustomLink from "../../common/components/CustomLink/index";
import Container from "@material-ui/core/Container";
import Logo from "../../common/components/logo/logo-lg";
import "./style.scss";
import store from "../../app/store";
import { Redirect } from "react-router-dom";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [isError, setIsError] = useState(false);

  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isErrorConfirmPassword, setIsErrorConfirmPassword] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState("");

  const handleError = () => {
    const errMsgList = store.getState().error.errorsList;

    if('Email' in errMsgList) {
      setIsErrorEmail(true);
      setErrorMessageEmail(errMsgList.Email[1])
    } else {
      setIsErrorEmail(false)
    }
    
    if (errMsgList.Password){
      setIsErrorPassword(true)
      setErrorMessagePassword(errMsgList.Password[1])
    } else {
      setIsErrorPassword(false)
    }

    if (errMsgList.ConfirmPassword){
      setIsErrorConfirmPassword(true)
      setErrorMessageConfirmPassword(errMsgList.ConfirmPassword[1])
    } else {
      setIsErrorConfirmPassword(false)
    }

    console.log(errMsgList);
    // return errMsgList ? errMsgList : ''
  };

  const registerUser = () => {
    dispatch(RegisterUser(email, password, c_password));
    // setErrorMessage(handleError)
    handleError();
  };

  let isLoggedIn = store.getState().auth.isAuthenticated;
  if (isLoggedIn) {
    return <Redirect to="/home" />;
  } else {
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
            error={isErrorEmail}
            helperText={errorMessageEmail.toString()}
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
            error={isErrorPassword}
            helperText={errorMessagePassword.toString()}
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
            error={isErrorConfirmPassword}
            helperText={errorMessageConfirmPassword.toString()}
          />
          <PrimaryBtn
            className="second-register-btn"
            handleClick={registerUser}
          >
            Zarejestruj
          </PrimaryBtn>
          <Link to="/">
            <SecondaryBtn>
              Masz już konto? <b>Zaloguj</b>
            </SecondaryBtn>
          </Link>
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
    );
  }
};

export default RegisterScreen;
