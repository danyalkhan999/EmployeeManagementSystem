import React from "react";
import Task from "./Task";

const CompleteTask = () => {
  return (
    <Task>
      <div className="mt-4">
        <button
          className="w-full bg-green-400
          text-white py-1 px-4 rounded-md"
        >
          Completed
        </button>
      </div>
    </Task>
  );
};

export default CompleteTask;
