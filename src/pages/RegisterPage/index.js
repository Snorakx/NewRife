import React from "react";
import { useState } from "react";
import SecondaryBtn from "../../common/components/SecondaryBtn/index";
import PrimaryBtn from "../../common/components/PrimaryBtn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../state/user/auth/authAction";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Logo from "../../common/components/logo/logo-lg";
import "./style.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const RegisterScreen = ({
  errorMainMessage,
  errorEmail,
  errorPassword,
  errorList,
  errorConfirmPassword,
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  let history = useHistory();
  const registerUser = () => {
    dispatch(RegisterUser(email, password, c_password));
    history.push("/settings");
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
          error={errorEmail?.length > 0 || errorMainMessage?.length > 0}
          helperText={errorEmail.length > 0 ? errorEmail : errorList}
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
          error={errorPassword?.length > 0 || errorMainMessage?.length > 0}
          helperText={errorPassword.length > 0 ? errorPassword : ""}
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
          error={
            errorConfirmPassword.length > 0 || errorMainMessage?.length > 0
          }
          helperText={
            errorConfirmPassword.length > 0
              ? errorConfirmPassword
              : errorMainMessage
          }
        />
        <PrimaryBtn className="second-register-btn" handleClick={registerUser}>
          Zarejestruj
        </PrimaryBtn>
        <Link to="/">
          <SecondaryBtn>
            Masz już konto? <b>Zaloguj</b>
          </SecondaryBtn>
        </Link>
      </form>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    errorMainMessage: state.error.msg,
    errorEmail: state.error.errorsList?.Email ?? "",
    errorPassword: state.error.errorsList?.Password ?? "",
    errorConfirmPassword: state.error.errorsList?.ConfirmPassword ?? "",
    errorList: state.error.errorsList[0] ?? "",
    isLoggedIn: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
  };
}

export default connect(mapStateToProps)(RegisterScreen);
