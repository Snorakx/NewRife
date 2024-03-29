import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import PrimaryBtn from "../../common/components/PrimaryBtn";
import { loginUser } from "../../state/user/auth/authAction";
import TextField from "@material-ui/core/TextField";
import CustomLink from "../../common/components/CustomLink/index";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Logo from "../../common/components/logo/logo-lg";
import { connect } from "react-redux";
import "./style.scss";

const LoginScreen = ({ error, isLoggedIn, isLoading }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatchLoginAction = () => {
    dispatch(loginUser(email, password));
  };

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
            name="name"
            autoComplete="email"
            autoFocus
            type="email"
            value={email}
            error={error.length > 0}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="form-input"
            id="password"
            margin="normal"
            required
            fullWidth
            label="Hasło"
            variant="outlined"
            name="password"
            autoFocus
            type="password"
            value={password}
            error={error.length > 0}
            helperText={error}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryBtn handleClick={dispatchLoginAction}>
            {isLoading ? "Logowanie..." : "Zaloguj"}
          </PrimaryBtn>
          <div>
            <CustomLink>
              <Link className="forget-password" to="/passwordReset">
                Zapomniałeś hasła?
              </Link>
            </CustomLink>
            <CustomLink>
              <Link className="create-account" to="/register">
                Pierwszy raz tutaj? <b>Zarejestruj</b>
              </Link>
            </CustomLink>
          </div>
        </form>
      </Container>
    );
  }
};

function mapStateToProps(state) {
  return {
    error: state.error.msg ?? "",
    isLoggedIn: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
  };
}

export default connect(mapStateToProps)(LoginScreen);
