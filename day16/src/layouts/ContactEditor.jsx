import "./ContactEditor.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useRef, useState } from "react";

const ContactEditor = ({ onCreate }) => {
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
        <Input
          ref={nameRef}
          value={contact.name}
          type="text"
          placeholder="이름 ..."
          onChange={onChangeContact}
        />
        <Input
          ref={emailRef}
          value={contact.email}
          type="email"
          placeholder="연락처(이메일) ..."
          onChange={onChangeContact}
        />
      </div>
      <Button type={"add"} onClick={onSubmit} />
    </div>
  );
};

export default ContactEditor;
