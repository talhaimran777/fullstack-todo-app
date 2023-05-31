import { atomWithReset } from "jotai/utils";
import type { Todo } from "@/app/api/todos/todo";

const todosAtom = atomWithReset<Todo[]>([]);

export default todosAtom;
