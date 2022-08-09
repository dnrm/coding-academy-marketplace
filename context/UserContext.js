import { useContext, createContext } from "react";
import useSWR from "swr";

const UserContext = createContext();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const UserWrapper = ({ children }) => {
  const userId = localStorage.getItem("coding-academy-user-id");

  const { data, error } = useSWR("/api/user/", fetcher);

  return (
    <UserContext.Provider value={{ data, error }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
