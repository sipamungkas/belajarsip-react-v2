import React, { useState } from "react";
import PropTypes from "prop-types";

function InputFormPassword(props) {
  const [show, setShow] = useState(false);
  const {
    label,
    forId,
    placeholder,
    onChangeHandler,
    type,
    additional,
    mb,
  } = props;
  if (type === "password") {
    return (
      <div className={`form-container ${mb ? `mb-${mb}` : "mb-3"}`}>
        {additional}
        <input
          type={show ? "text" : "password"}
          id={forId}
          placeholder={placeholder}
          onChange={onChangeHandler}
          autoComplete={"false"}
          tabIndex={1}
        />
        <label htmlFor={forId}>{label}</label>
        <img
          className="eye-icon"
          src={`assets/images/icons/${
            show ? "eye-slash-icon.svg" : "eye-icon.svg"
          }`}
          alt="eye icon"
          onClick={() => setShow(!show)}
        />
      </div>
    );
  }
  return (
    <div className={`form-container ${mb ? `mb-${mb}` : "mb-3"}`}>
      {additional}
      <input
        type={type}
        id={forId}
        placeholder={placeholder}
        onChange={onChangeHandler}
        autoComplete={"true"}
        tabIndex={1}
      />
      <label htmlFor={forId}>{label}</label>
    </div>
  );
}

InputFormPassword.propTypes = {
  onChangeHandler: PropTypes.func,
  label: PropTypes.string,
  forId: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  mb: PropTypes.string,
};

export default InputFormPassword;
