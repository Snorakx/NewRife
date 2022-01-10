import React from "react";
import "./style.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CustomInput = (props) => {
  return (
    <div className="my-input">
      <div className="container">
        <TextField
          id="outlined-secondary"
          label="Dodaj nowe zadanie"
          variant="outlined"
          color="primary"
          className="custom-input"
          value={props.val}
          onChange={props.onChng}
        />
        <Button
          className="custom-button-for-input"
          variant="contained"
          color="primary"
          disableElevation
          onClick={props.handleClick}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CustomInput;
