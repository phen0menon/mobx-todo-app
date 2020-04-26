import { observable, action } from "mobx";
import { Todo } from "./types";

const useEmplace = <T extends Object>(
  container: T[],
  containerEl: T,
  property: keyof T
): [T[], number] => {
  const _index = container.findIndex((c) =>
    c.hasOwnProperty(property) ? c[property] === containerEl[property] : false
  );
  console.assert(
    _index !== undefined || _index !== null,
    `An error occured while invoking useEmplace: element not found`
  );
  return [[...container], _index];
};

export default class TodoStore {
  @observable todos: Todo[] = [];

  @action
  createTodo(todo: Todo) {
    this.todos.push(todo);
  }

  @action
  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.created !== todo.created);
  }

  @action
  toggleTodo(todo: Todo) {
    const [nextTodos, idx] = useEmplace(this.todos, todo, "created");
    nextTodos[idx].fullfilled = !nextTodos[idx].fullfilled;
    this.todos = nextTodos;
  }

  constructor(state) {
    this.todos = state;
  }
}
