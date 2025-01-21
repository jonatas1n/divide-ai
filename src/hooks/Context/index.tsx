import React, { createContext, useContext, ReactNode } from "react";
import { GuestContextType, GuestContext } from "./guests";
import { ProductsContext, ProductsContextType } from "./products";
import { CostsContextType, CostsContext } from "./costs";
import { CostType } from "../../types";

type AppContextType = ProductsContextType &
  GuestContextType &
  CostsContextType & { refreshCosts: VoidFunction };

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const guestContext = GuestContext();
  const productsContext = ProductsContext();
  const costsContext = CostsContext();

  const refreshCosts = () => {
    const updatedCosts = { ...costsContext.costs };
    Object.values(updatedCosts).forEach((cost) => {
      cost.guests = cost.guests.filter(
        (guestID) => guestContext.guests[guestID]
      );
      cost.products = Object.entries(cost.products).reduce(
        (newProducts: CostType["products"], [productID, product]) => {
          if (productsContext.products[productID]) {
            newProducts[productID] = product;
          }
          return newProducts;
        },
        {}
      );

      updatedCosts[cost.id] = cost;
    });

    if (JSON.stringify(updatedCosts) !== JSON.stringify(costsContext.costs)) {
      costsContext.updateCosts(updatedCosts);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...productsContext,
        ...guestContext,
        ...costsContext,
        refreshCosts,
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
