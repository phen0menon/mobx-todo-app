export type TodoGroup = string;

export interface Todo {
  title: string;
  created: Date | string | null;
  fullfilled: boolean;
  group: TodoGroup;
}
