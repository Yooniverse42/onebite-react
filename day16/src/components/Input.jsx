import { memo } from "react";
import "./Input.css";

const Input = ({ ref, value, type, placeholder, onChange }) => {
  switch (type) {
    case "text":
      return (
        <input
          ref={ref}
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
      );
    case "email":
      return (
        <input
          ref={ref}
          value={value}
          type="email"
          placeholder={placeholder}
          onChange={onChange}
        />
      );
    default:
      return;
  }
};

export default memo(Input);
