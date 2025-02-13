import "./ContactEditor.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useRef, useState, useContext } from "react";
import { ContactDispatchContext } from "../App";

const ContactEditor = () => {
  const { onCreate } = useContext(ContactDispatchContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const nameRef = useRef();
  const emailRef = useRef();

  const onChangeContact = (e) => {
    const type = e.target.type;
    const value = e.target.value;

    setContact((prev) => ({
      ...prev,
      [type === "text" ? "name" : "email"]: value,
    }));
  };

  const onSubmit = () => {
    if (contact.name === "") {
      nameRef.current.focus();
      return;
    }

    if (contact.email === "") {
      emailRef.current.focus();
      return;
    }

    onCreate(contact);
    setContact({
      name: "",
      email: "",
    });
  };

  return (
    <div className="ContactEditor">
      <h2>Add Contact</h2>
      <div className="inputWrapper">
        <Input.Text
          ref={nameRef}
          value={contact.name}
          placeholder="이름 ..."
          onChange={onChangeContact}
        />
        <Input.Email
          ref={emailRef}
          value={contact.email}
          placeholder="연락처(이메일) ..."
          onChange={onChangeContact}
        />
      </div>
      <Button.Add onClick={onSubmit} />
    </div>
  );
};

export default ContactEditor;
