/// Inside this i will handle user information
//create context  7. user   userContext return  (</userContext.Provider>)
// pass the children from main.js
//
import { createContext, useContext, useState } from "react";

const userContext = createContext();

const authContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  );
};
export const useAuth = () => useContext(userContext);
//we can use user,login,logout from useAuth
export default authContext;
