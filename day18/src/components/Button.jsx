import { string, oneOf, func } from "prop-types";
import "./Button.css";

function Button({ text, type, onClick }) {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: string,
  type: oneOf(["DEFAULT", "POSITIVE", "NEGATIVE"]),
  onClick: func,
};

export default Button;
