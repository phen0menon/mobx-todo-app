import React from "react";
import styled from "styled-components";
import { Todo } from "#/mobx/types";

const TodoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #e8e8e8;
  border-radius: 16px;
  padding: 1rem;
  margin-top: 1rem;
  color: #020202;
`;

const TodoItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TodoItemHeaderTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const TodoItemHeaderAction = styled.div`
  font-size: 14px;
`;

const TodoItemStatus = styled.div`
  display: block;
  margin-top: 1rem;
`;

const TodoItemCreated = styled.div`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
`;

const TodoItemAdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TodoItemStatusCheckbox = styled.input`
  height: 30px;
  width: 30px;
`;

interface TodoItemProps {
  todo: Todo;
  onStatusChange: () => void;
  onTodoRemove: () => void;
}

const TodoItem = ({ todo, onStatusChange, onTodoRemove }: TodoItemProps) => {
  return (
    <TodoItemWrapper>
      <TodoItemHeader>
        <TodoItemHeaderTitle>{todo.title}</TodoItemHeaderTitle>
        <TodoItemHeaderAction onClick={onTodoRemove}>
          Delete
        </TodoItemHeaderAction>
      </TodoItemHeader>
      <TodoItemAdditionalInfo>
        <TodoItemStatus>
          <TodoItemStatusCheckbox
            type="checkbox"
            checked={todo.fullfilled}
            onChange={onStatusChange}
          />
        </TodoItemStatus>
        <TodoItemCreated>{todo.created?.toString()}</TodoItemCreated>
      </TodoItemAdditionalInfo>
    </TodoItemWrapper>
  );
};

export default TodoItem;
