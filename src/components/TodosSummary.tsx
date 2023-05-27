"use client";

const TodosSummary = () => {
  return (
    <div className="py-4 px-5 bg-white flex justify-between items-center text-xs text-gray-600">
      <p>5 items left</p>
      <button>Clear Completed</button>
    </div>
  );
};

export default TodosSummary;
