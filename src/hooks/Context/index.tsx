import React, { createContext, useContext, ReactNode } from "react";
import { GuestContextType, GuestContext } from "./guests";
import { ProductsContext, ProductsContextType } from "./products";
import { CostsContextType, CostsContext } from "./costs";

type AppContextType = ProductsContextType & GuestContextType & CostsContextType;

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const guestContext = GuestContext();
  const productsContext = ProductsContext();
  const costsContext = CostsContext();

  return (
    <AppContext.Provider
      value={{
        ...productsContext,
        ...guestContext,
        ...costsContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
