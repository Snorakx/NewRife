import React, { useState, useEffect } from "react";
import store from "../../app/store";

import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";
import PrimaryBtn from "../../common/components/PrimaryBtn";
import { loginUser } from "../../state/user/auth/authAction";
import TextField from "@material-ui/core/TextField";
import CustomLink from "../../common/components/CustomLink/index";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Logo from "../../common/components/logo/logo-lg";
import "./style.scss";

const LoginScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (store.getState().auth.isAuthenticated === true) {
  //     history.push("/settings");
  //   }
  // });
  const  dispatchLoginAction = async () => {
    dispatch(loginUser(email, password));
    history.push('/home')
  };
  let isLoggedIn = store.getState().auth.isAuthenticated
  if(isLoggedIn){
    return <Redirect to="/home"/>
  }else{
  return(   
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryBtn handleClick={dispatchLoginAction}>Zaloguj</PrimaryBtn>
          <div>
            <CustomLink>
              <Link className="forget-password" to="/passwordReset">
                Zapomniałeś hasła?{" "}
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

export default LoginScreen;
