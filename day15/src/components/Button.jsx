import "./Button.css";

const Button = ({ type, onClick }) => {
  switch (type) {
    case "add":
      return (
        <button type="button" className="AddButton" onClick={onClick}>
          Add
        </button>
      );
    case "remove":
      return (
        <button type="button" className="RemoveButton" onClick={onClick}>
          🗑️ Remove
        </button>
      );
    default:
      return;
  }
};

export default Button;
