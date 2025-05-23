import React from "react";

const Header = ({ data }) => {
  const firstName = data.name.split(" ")[0];
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br />{" "}
        <span className="text-3xl font-semibold">{firstName}👋</span>
      </h1>
      <button className="bg-red-500 text-white px-5 py-2 text-lg font-medium rounded-md">
        Log Out
      </button>
    </div>
  );
};

export default Header;
