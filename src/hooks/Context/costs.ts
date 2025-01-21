import { useState, Dispatch, SetStateAction } from "react";
import { CostType } from "../../types"
import { generateId } from "../../utils/id-get";
import { saveOnLocalStorage, getFromLocalStorage } from "../../storage/storage";

const LOCAL_STORAGE_KEY = "costs"

export type CostsContextType = {
  costs: Record<string, CostType>,
  addCost: () => void;
  updateCosts: Dispatch<SetStateAction<Record<string, CostType>>>;
  changeCost: (cost: CostType) => void;
  removeCost: (costID: string) => void;
}

export const CostsContext = () => {
  const storagedData = getFromLocalStorage(LOCAL_STORAGE_KEY);
  const [costs, setCosts] = useState<Record<string, CostType>>(storagedData);

  const updateCosts: Dispatch<SetStateAction<Record<string, CostType>>> = (costData) => {
    setCosts(prevCosts => {
      const updatedCosts = typeof costData === 'function' ? costData(prevCosts) : {...prevCosts, ...costData};
      saveOnLocalStorage({type: LOCAL_STORAGE_KEY, data: updatedCosts});
      return updatedCosts
    });
  };

  const newCost = () => ({id: generateId(), products: {}, guests: []});

  const addCost = () => {
    const cost = newCost();
    updateCosts(prev => ({
      ...prev,
      [cost.id]: cost,
    }))
  };

  const changeCost = (cost: CostType) => {
    updateCosts(prev => ({
      ...prev,
      [cost.id]: cost,
    }))
  };

  const removeCost = (costID: string) => {
    updateCosts(prev => {
      const updatedCosts = { ...prev };
      delete updatedCosts[costID];
      if (Object.keys(updatedCosts).length == 0) {
        const product = newCost();
        return { [product.id]: product };
      }
      return updatedCosts;
    });
  };

  return {costs, addCost, removeCost, changeCost, updateCosts}
} 