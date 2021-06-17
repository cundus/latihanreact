import "./TodoCreate.css";
import { useState } from "react";

const TodoCreate = (props) => {
  const [getInput, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInput,
    };

    props.onCreateTodo(newTodo);

    setInput("");

    console.log(newTodo);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div>
        <input type="text" value={getInput} onChange={handleInput} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoCreate;
