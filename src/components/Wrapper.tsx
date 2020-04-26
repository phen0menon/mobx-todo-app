import React from "react";
import { observer } from "mobx-react";
import TodoStore from "#/mobx/TodoStore";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const StyledApplicationWrapper = styled.div`
  display: block;
  padding: 1rem;
`;

const Wrapper = observer((props: { store: TodoStore }) => {
  const renderedTodos = props.store.todos.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.created?.toString()}
      onStatusChange={() => props.store.toggleTodo(todo)}
      onTodoRemove={() => props.store.removeTodo(todo)}
    />
  ));

  return (
    <StyledApplicationWrapper>
      <div>{renderedTodos}</div>
      <div>
        <TodoCreator store={props.store} />
      </div>
    </StyledApplicationWrapper>
  );
});

export default Wrapper;
