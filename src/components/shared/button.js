import React from "react";

const Button = ({
  text,
  imageSrc,
  className,
  onClick,
  height,
  width,
  disabled,
  imageClassName,
}) => {
  const buttonClassName = className || "";
  const buttonStyle = {
    minHeight: height,
    minWidth: width,
  };
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <button
      className={buttonClassName}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
    >
      {imageSrc && (
        <img src={imageSrc} alt="Button Image" className={imageClassName} />
      )}
      {text}
    </button>
  );
};
export default Button;
