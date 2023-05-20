const Todo = () => {
  return (
    <div className="flex justify-between items-center border-2 p-3 rounded-md">
      <input type="checkbox" />
      <p>Play basketball</p>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
