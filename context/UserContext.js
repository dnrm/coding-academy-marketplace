import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserWrapper = ({ children }) => {
  const [session, setSession] = useState({});

  useEffect(() => {
    fetchSession();
  }, []);

  const fetchSession = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();

    if (!data.error) {
      const fetchUser = await fetch("/api/user/" + data.user.id);
      const user = await fetchUser.json();
      setSession(user);
      return;
    }

    setSession(null);
  };

  return (
    <UserContext.Provider value={{ session, setSession }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
