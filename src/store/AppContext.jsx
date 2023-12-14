import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/apiAuth";
const AppContext = createContext();

const currentUser = await getCurrentUser();
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(currentUser);

  const value = {
    user,
    setUser,
  };

  console.log(user);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
