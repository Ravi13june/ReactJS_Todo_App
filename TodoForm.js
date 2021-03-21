import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
} from "reactstrap";
import { v4 } from "uuid";
export default function TodoForm({ addTodos }) {
  const [todoString, setTodoString] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please Fill Something");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter a Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success">Add Todo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
