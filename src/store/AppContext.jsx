import { createContext, useEffect, useState } from "react";

import supabase from "../../public/supabase/Supabase";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(undefined);
  const [session, setSession] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState(tasks );



  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

  
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
    tasks,
    setTasks,
    filteredTasks,
    setFilteredTasks
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
