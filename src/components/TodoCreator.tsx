import React from "react";
import { observer } from "mobx-react";
import TodoStore from "#/mobx/TodoStore";
import styled from "styled-components";

const TodoCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem;
`;

const TodoCreatorLabel = styled.div`
  font-size: 1.375rem;
`;

const TodoCreatorInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border-radius: 16px;
  margin-top: 1.275rem;
  outline: none;

  &:active,
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const TodoCreator = observer(({ store }: { store: TodoStore }) => {
  const [todoTitle, setTodoTitle] = React.useState<string>("");

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      store.createTodo({
        title: todoTitle,
        created: new Date(),
        fullfilled: false,
        group: "group first",
      });
      setTodoTitle("");
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  return (
    <TodoCreatorWrapper>
      <TodoCreatorLabel>New Todo</TodoCreatorLabel>
      <TodoCreatorInput
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Todo Title"
      />
    </TodoCreatorWrapper>
  );
});

export default TodoCreator;
