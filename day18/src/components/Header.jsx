import { string, object } from "prop-types";
import "./Header.css";

function Header({ leftChild, title, rightChild }) {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
}

Header.propTypes = {
  leftChild: object,
  title: string,
  rightChild: object,
};

export default Header;
