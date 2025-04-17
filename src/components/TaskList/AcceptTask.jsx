import React from "react";
import Task from "./Task";

const AcceptTask = () => {
  return (
    <Task>
      <div className="flex justify-between mt-4">
        <button
          className=" bg-green-500 hover:bg-green-600 
          text-white py-2 px-4 rounded-md
          transition-colors duration-150
          active:bg-green-700"
        >
          Completed
        </button>
        <button
          className=" bg-red-500 hover:bg-red-600 
          text-white py-2 px-4 rounded-md
          transition-colors duration-150
          active:bg-red-700"
        >
          Failed
        </button>
      </div>
    </Task>
  );
};

export default AcceptTask;
