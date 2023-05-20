"use client";

const createTodo = async () => {
  const res = await fetch(`http://localhost:3000/api/todos`, {
    method: "post",
  });

  return res.json();
};

const TodoCreator = async () => {
  return (
    <>
      <input
        className="p-2 border-2 w-full rounded-md mb-5 outline-none focus-visible:border-blue-300 focus-visible:border-2"
        type="text"
        placeholder="Create a todo item!"
      />
      <button
        onClick={async () => {
          const todosData = createTodo();
          const [todo] = await Promise.all([todosData]);
          console.log(todo);
        }}
      >
        Create
      </button>
    </>
  );
};

export default TodoCreator;
