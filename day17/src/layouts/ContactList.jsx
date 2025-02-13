import { memo, useContext } from "react";
import ListItem from "../components/ListItem";
import "./ContactList.css";
import { ContactStateContext } from "../App";

const ContactList = () => {
  const list = useContext(ContactStateContext);

  return (
    <div className="List">
      <h2>Contact List</h2>
      <div className="contactWrapper">
        {list.length ? (
          list.map((listItem) => {
            return <ListItem {...listItem} key={listItem.id} />;
          })
        ) : (
          <p>✨ 연락처를 추가해 보세요! ✨</p>
        )}
      </div>
    </div>
  );
};

export default memo(ContactList);
