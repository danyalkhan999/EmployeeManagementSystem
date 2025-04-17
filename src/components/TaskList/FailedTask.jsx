import React from "react";
import Task from "./Task";

const FailedTask = () => {
  return (
    <Task>
      <div className="mt-4">
        <button
          className="w-full bg-red-400
          text-white py-1 px-4 rounded-md"
        >
          Failed
        </button>
      </div>
    </Task>
  );
};

export default FailedTask;
