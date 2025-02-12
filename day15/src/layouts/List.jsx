import ListItem from "../components/ListItem";
import "./List.css";

const List = ({ list, onDelete }) => {
  return (
    <div className="List">
      <h2>Contact List</h2>
      <div className="contactWrapper">
        {list.length ? (
          list.map((listItem) => {
            return (
              <ListItem {...listItem} key={listItem.id} onDelete={onDelete} />
            );
          })
        ) : (
          <p>✨ 연락처를 추가해 보세요! ✨</p>
        )}
      </div>
    </div>
  );
};

export default List;
