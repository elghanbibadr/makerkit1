import { createContext, useEffect, useState } from "react";

import supabase from "../../public/supabase/Supabase";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    console.log("somthing changed");
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  const value = {
    session,
    setSession,
  };

  console.log("session", session);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
