import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";
import clsx from "clsx";

const TextField = ({
  backgroundColor,
  color,
  placeholder,
  value,
  size,
  onChange,
  onClick,
  ...props
}) => {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    size: size,
  };
  return (
    <input
      type="text"
      className={clsx("storybook-textfield", `storybook-textfield--${size}`)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      color={color}
      style={style}
      {...props}
    ></input>
  );
};

TextField.propTypes = {
  backgroundColor: PropTypes.string,
  Color: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

TextField.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};

export default TextField;
