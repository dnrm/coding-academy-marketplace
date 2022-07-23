import { useContext, createContext } from "react";
import useSWR from "swr";

const ProductContext = createContext();

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const ProductWrapper = ({ children }) => {
  const { data, error } = useSWR("/api/products", fetcher);

  return (
    <ProductContext.Provider value={{ data, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
    return useContext(ProductContext);
}