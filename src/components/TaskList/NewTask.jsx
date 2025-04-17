import React from "react";
import Task from "./Task";

const NewTask = ({ data }) => {
  return (
    <Task data={data}>
      <div className="mt-4">
        <button
          className=" bg-green-500 hover:bg-green-600 
          text-white py-2 px-4 rounded-md
          transition-colors duration-150
          active:bg-green-700"
        >
          Accept Task
        </button>
      </div>
    </Task>
  );
};

export default NewTask;
