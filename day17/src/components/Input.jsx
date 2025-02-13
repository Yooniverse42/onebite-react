import "./Input.css";

const Input = ({ ref, value, type, placeholder, onChange }) => {
  return (
    <input
      ref={ref}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

// ✅ 개별적으로 memo 적용
const Text = (props) => <Input type="text" {...props} />;
const Email = (props) => <Input type="email" {...props} />;

Input.Text = Text;
Input.Email = Email;

export default Input;
