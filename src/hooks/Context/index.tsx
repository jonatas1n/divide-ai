import React, { createContext, useContext, ReactNode } from "react";
import { GuestContextType, GuestContext } from "./guests";
import { ProductsContext, ProductsContextType } from "./products";
import { CostsContextType, CostsContext } from "./costs";

type AppContextType = ProductsContextType &
  GuestContextType &
  CostsContextType;

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const guestContext = GuestContext();
  const productsContext = ProductsContext();
  const costsContext = CostsContext();

  const calculateTotalCosts = () => {
    const updatedGuestsCosts = Object.values(costsContext.costs).reduce<Record<string, number>>(
      (acc, cost) => {
        const total: number = Object.values(cost.products).reduce(
          (_acc, currentValue) => {
            const unitCost = productsContext.products[currentValue.productID]?.price ?? 0;
            return _acc + unitCost * currentValue.quantity;
          },
          0
        );

        cost.guests.forEach(guestID => {
          acc[guestID] = (acc[guestID] ?? 0) + total / cost.guests.length;
        });

        return acc;
      },
      {}
    );

    Object.entries(updatedGuestsCosts).forEach(([guestID, totalCost]) => {
      guestContext.changeGuest({...guestContext.guests[guestID], totalCost});
    })
  }

  return (
    <AppContext.Provider
      value={{
        ...productsContext,
        ...guestContext,
        ...costsContext,
        calculateTotalCosts,
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
