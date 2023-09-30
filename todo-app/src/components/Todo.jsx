const Todo = ({ data, setData, todo, key }) => {
  const deleteHandler = () => {
    setData(data.filter((el) => el.id !== todo.id));
  };

  const compleateHandler = () => {
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

  return (
    <>
      {todo.name.length > 0 && (
        <div className="todo" key={key}>
          <li className={`todo-item ${todo.compleate ? "compleated" : ""}`}>
            {todo.name}
          </li>
          <button className="delete" onClick={deleteHandler}>
            Delete
          </button>
          <button className="checked" onClick={compleateHandler}>
            Compleated
          </button>
        </div>
      )}
    </>
  );
};
export default Todo;
