import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { data } from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setuser] = useState(null);
  const [value, setvalue] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setuser(data);
        setvalue(true);
      });
      setuser(data);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setuser, value }}>
      {children}
    </UserContext.Provider>
  );
}
