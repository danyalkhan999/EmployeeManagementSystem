import React from "react";

const Task = ({ children, data }) => {
  console.log("task info", data);
  return (
    <div className="h-full   w-[300px] p-5 flex-shrink-0 bg-violet-400 rounded-xl ">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video.</h2>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          praesentium eos ea vero ipsa facere veritatis temporibus.
        </p>
      </div>

      {children}
    </div>
  );
};

export default Task;
