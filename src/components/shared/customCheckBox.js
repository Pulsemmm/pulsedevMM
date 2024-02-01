import { Icon } from "@iconify/react";
import React from "react";

const CustomCheckBox = ({
  label,
  customClasses,
  onChange,
  name,
  id,
  value,
  checked = false,
}) => {
  return (
    <div className={`custom-check-button ${customClasses}`}>
      <label htmlFor={id} className="pointer fw-500 un-select">
        {checked ? (
          <Icon
            icon="teenyicons:tick-circle-solid"
            color="black"
            width="16"
            height="16"
            className="me-2"
          />
        ) : (
          <Icon
            icon="teenyicons:circle-solid"
            color="#e0e0e0"
            width="16"
            height="16"
            className="me-2"
          />
        )}
        <input
          className="gfield-choice-input d-none"
          type="checkbox"
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          checked={checked}
        />
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
