import { useState } from "react";
const Todo = ({ data, setData, todo, key }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.name);

  // const month = data.date.toLocaleString("en-US", { month: "long" });
  // const day = data.date.toLocaleString("en-US", { day: "2-digit" });

  const deleteHandler = () => {
    setData(data.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setData(
      data.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            compleate: !item.compleate,
          };
        }
        return item;
      })
    );
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const saveHandler = () => {
    setData(
      data.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            name: editedText,
          };
        }
        return item;
      })
    );
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className="todo" key={key}>
          <input
            className="editTodo"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            key={key}
          />
          <button className="save" onClick={saveHandler}>
            Save
          </button>
        </div>
      ) : (
        <div className="todo" key={key}>
          <li
            className={`todo-item ${todo.compleate ? "compleated" : ""}`}
            key={key}
          >
            {todo.name}
          </li>

          <button className="edit" onClick={editHandler}>
            Edit
          </button>
          <button className="delete" onClick={deleteHandler}>
            Delete
          </button>
          <button className="checked" onClick={completeHandler}>
            Complete
          </button>
        </div>
      )}
    </>
  );
};
export default Todo;
