import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ tasks }) => {
  console.log("tasks", tasks);
  return (
    <div
      id="tasklist"
      className="h-[55%] mt-5 overflow-x-auto flex items-center justif-start flex-nowrap gap-5 w-full "
    >
      {tasks.map((el, index) => {
        if (el.active) {
          console.log("task info active task", el);
          return <AcceptTask key={index} data={el} />;
        }
        if (el.newTask) {
          console.log("task info new Task", el);
          return <NewTask key={index} data={el} />;
        }
        if (el.completed) {
          console.log("task info complted task", el);
          return <CompleteTask key={index} data={el} />;
        }
        if (el.failed) {
          console.log("task info failed", el);
          return <FailedTask key={index} data={el} />;
        }
      })}
      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
    </div>
  );
};

export default TaskList;
