import "./Header.css";

function Header({ leftChild, title, rightChild }) {
  return (
    <header className="Header">
      <div>{leftChild}</div>
      <div className="header_center">{title}</div>
      <div>{rightChild}</div>
    </header>
  );
}

export default Header;
