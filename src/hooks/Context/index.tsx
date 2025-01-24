import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useCallback,
} from "react";
import { GuestContextType, GuestContext } from "./guests";
import { ProductsContext, ProductsContextType } from "./products";
import { CostsContextType, CostsContext } from "./costs";
import { CostType } from "../../types";

type AppContextType = ProductsContextType &
  GuestContextType &
  CostsContextType & { refreshCosts: VoidFunction };

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const guestContext = GuestContext();
  const productsContext = ProductsContext();
  const costsContext = CostsContext();

  const refreshCosts = useCallback(() => {
    const filterCostProducts = (products: CostType["products"]) => {
      const productKeys = new Set(Object.keys(productsContext.products));
      return Object.keys(products).reduce((filtered, productKey) => {
        const hasProduct = productKeys.has(productKey);
        return hasProduct
          ? { ...filtered, [productKey]: products[productKey] }
          : filtered;
      }, {});
    };

    const filterCostGuests = (guests: CostType["guests"]) => {
      const guestKeys = new Set(Object.keys(guestContext.guests));
      return guests.filter((guestID) => guestKeys.has(guestID));
    };

    const updatedCosts = Object.values(costsContext.costs).reduce<
      Record<string, CostType>
    >((_acc, cost) => {
      const filteredCostProducts = filterCostProducts(cost.products);
      if (Object.keys(filteredCostProducts).length === 0) return _acc;

      const filteredCostGuests = filterCostGuests(cost.guests);

      _acc[cost.id] = {
        ...cost,
        products: filteredCostProducts,
        guests: filteredCostGuests,
      };

      return _acc;
    }, {});

    if (JSON.stringify(updatedCosts) !== JSON.stringify(costsContext.costs)) {
      costsContext.updateCosts(updatedCosts);
    }
  }, [costsContext, guestContext.guests, productsContext.products]);

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
