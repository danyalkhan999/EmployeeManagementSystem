import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

setLocalStorage();
function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      console.info("Current user", user);
    } else if (email == "david.wilson@example.com" && password == "123") {
      setUser("employee");
      console.info("Current user", user);
    } else {
      alert("Invalid credentials");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);

  // handleLogin("admin@example.com", 123);

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
