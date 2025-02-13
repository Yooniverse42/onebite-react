import "./Button.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const Add = ({ onClick }) => (
  <Button onClick={onClick} className="AddButton">
    Add
  </Button>
);

const Remove = ({ onClick }) => (
  <Button onClick={onClick} className="RemoveButton">
    🗑️ Remove
  </Button>
);

Button.Add = Add;
Button.Remove = Remove;

export default Button;
