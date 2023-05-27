"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { Todo } from "@/app/api/todos/todo";

type StateType = {
  todos: Todo[] | undefined;
};

type ActionType = {
  type: string;
  payload: Todo[] | undefined;
};

const initialState: StateType = {
  todos: [],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export const TodosContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export function useTodos() {
  const context = React.useContext(TodosContext);
  if (context === undefined) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
}
