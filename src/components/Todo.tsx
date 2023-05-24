"use client";

import { deleteTodo } from "@/app/api/todos/deleteTodo";
import { Todo } from "@/app/api/todos/todo";
import { useTodos } from "@/context/todos.provider";
import { FC } from "react";

type TodoProps = {
  todo: Todo;
};

const Todo: FC<TodoProps> = ({ todo }) => {
  const { dispatch, state } = useTodos();

  const removeTodo = async (todo: Todo) => {
    const deletedTodoResponse = await deleteTodo(todo);
    if (deletedTodoResponse?.deletedTodoId) {
      dispatch({
        type: "SET_TODOS",
        payload: [
          ...state.todos.filter(
            (todo) => todo.id !== deletedTodoResponse.deletedTodoId
          ),
        ],
      });
    }
  };

  return (
    <div className="flex justify-between items-center border-2 p-3 rounded-md my-2">
      <input type="checkbox" defaultChecked={todo.status == "completed"} />
      <p>{todo.name}</p>
      <button onClick={removeTodo.bind(this, todo)}>Delete</button>
    </div>
  );
};

export default Todo;
