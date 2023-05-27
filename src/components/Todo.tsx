"use client";

import { deleteTodo } from "@/app/api/todos/deleteTodo";
import { Todo } from "@/app/api/todos/todo";
import { useTodos } from "@/context/todos.provider";
import Image from "next/image";
import Cross from "public/icon-cross.svg";
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
    <div className="bg-white flex justify-between items-center py-4 px-5 border-b-2 border-slate-100">
      <div className="flex justify-between items-center gap-3">
        <input type="checkbox" defaultChecked={todo.status == "completed"} />
        <p className="text-xs">{todo.name}</p>
      </div>
      <Image
        src={Cross}
        alt="Cross Icon"
        className="h-3 w-3"
        onClick={removeTodo.bind(this, todo)}
      />
    </div>
  );
};

export default Todo;
