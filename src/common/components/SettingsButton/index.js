import React, { useState } from "react";
import './style.scss';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const SettingsButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {props.children}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        {props.optionNames.map((option, index)=>{
          return(<MenuItem key={index} onClick={option.handleClick}>{option.name}</MenuItem>)
        })}
        </Menu>
      </div>
    );
  }

