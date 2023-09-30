import { useState } from "react";

const FormInput = ({ onGetdata }) => {
  const [todo, setTodo] = useState("");

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const todoInput = todo;

    onGetdata(todoInput);
    setTodo("");
  };

  return (
    <form onSubmit={submitHandler} className="formInput">
      <input
        type="text"
        className="todo-input"
        placeholder="What do you have Planned?"
        value={todo}
        onChange={changeHandler}
      />
      <button className="add-items " type="submit">
        <i className="fa-solid fa-plus" />
      </button>
    </form>
  );
};
export default FormInput;
