import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
    console.log("Form Submitted", formData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    const noSpacesValue = value.replace(/\s/g, "");

    setFormData((prev) => ({
      ...prev,
      [id]: noSpacesValue,
    }));
  };

  //   prevent extra spaces input
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20 rounded-lg">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <input
              //   value={formData?.email}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              id="email"
              required
              className="border-2 border-emerald-500 rounded-lg py-3 px-5 text-xl  outline-null bg-transparent placeholder:text-gray-400"
              type="email"
              pattern="^\S*$"
              placeholder="email"
            />
            <input
              //   value={formData?.password}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
              className=" border-2 border-emerald-500 rounded-lg py-3 px-5 text-xl  outline-null bg-transparent placeholder:text-gray-400"
              type="password"
              id="password"
              pattern="^\S*$"
              placeholder="password"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-emerald-500 rounded-lg py-3 px-5 text-xl text-gray-400  "
            >
              {" "}
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
