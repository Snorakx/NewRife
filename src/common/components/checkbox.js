import React from "react";
import "./style.scss";

const Checkbox = () => {
  return (
<div className="container">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox" className="check-box"></label>
</div>
  );
};

export default Checkbox;
