import React from "react";

const TaskListNumber = ({ counts }) => {
  console.log(counts);
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="px-10 py-5 w-[45%] bg-red-400 rounded-xl">
        <h2 className="text-2xl font-extrabold">{counts.newTask || 0}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>

      <div className="px-10 py-5 w-[45%] bg-green-400 rounded-xl">
        <h2 className="text-2xl font-extrabold">{counts.completedTask || 0}</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>

      <div className="px-10 py-5 w-[45%] bg-blue-400 rounded-xl">
        <h2 className="text-2xl font-extrabold">{counts.activeTask || 0}</h2>
        <h3 className="text-xl font-semibold">Active Task</h3>
      </div>

      <div className="px-10 py-5 w-[45%] bg-yellow-400 rounded-xl">
        <h2 className="text-2xl font-extrabold">{counts.failedTask || 0}</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
