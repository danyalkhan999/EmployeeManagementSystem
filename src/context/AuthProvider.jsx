import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employeesData, adminData } = getLocalStorage();
    setUserData({ employeesData, adminData });
  }, []);

  return (
    <div>
      <AuthContext value={userData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
