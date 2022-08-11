import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserWrapper = ({ children }) => {
  const [session, setSession] = useState(null);

  const signOut = () => {
    setSession(null);
    localStorage.removeItem("coding-academy-user-id");
    location.reload()
  };

  useEffect(() => {
    const userId = localStorage.getItem("coding-academy-user-id");
    if (!userId) {
      setSession({ userId: null });
    } else {
      setSession({ userId });
    }
  }, []);

  return (
    <UserContext.Provider value={{ session, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
