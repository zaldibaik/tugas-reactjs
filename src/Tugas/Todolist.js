import React, { useState } from "react";
import { Button, Card, TextInput, Table } from "flowbite-react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Card className=" container mx-auto ">
      <div className="h3">TodoList</div>
      <form className="flex flex-col p-6 gap-4" onSubmit={handleSubmit}>
        <TextInput
          className="form-label"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add Todo..."
        />
        <Button
          className="btn btn-primary d-flex justify-content-between"
          type="submit"
        >
          Tambah
        </Button>
      </form>
      <br></br>
      <Table>
        <ul className="list-group ">
          {todos.map((todo, index) => (
            <li
              className="list-group-item d-flex justify-content-between h4"
              key={index}
            >
              <label >
                <span 
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  onClick={() => toggleTodo(index)}
                >
                  {todo.text}
                </span>
              </label>
              <Button
                className="btn btn-danger me-md-2"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </Button>
              
            </li>
          ))}
        </ul>
      </Table>
    </Card>
  );
}

export default TodoList;
