import { useState, Dispatch, SetStateAction } from "react";
import { generateId } from "../../utils/id-get";
import { ProductType } from "../../types";
import { saveOnLocalStorage, getFromLocalStorage } from "../../storage/storage";

const LOCAL_STORAGE_KEY = "products";

export type ProductsContextType = {
  products: Record<string, ProductType>;
  addProduct: () => void;
  updateProducts: Dispatch<SetStateAction<Record<string, ProductType>>>;
  changeProduct: (product: ProductType) => void;
  removeProduct: (productID: string) => void;
};

export const ProductsContext = () => {
  const storagedData = getFromLocalStorage(LOCAL_STORAGE_KEY);
  const [products, setProducts] = useState<Record<string, ProductType>>(storagedData);

  const updateProducts: Dispatch<SetStateAction<Record<string, ProductType>>> = (productData) => {
    setProducts(prevProducts => {
      const updatedProducts = typeof productData === 'function' ? productData(prevProducts) : { ...prevProducts, ...productData };
      saveOnLocalStorage({type: LOCAL_STORAGE_KEY, data: updatedProducts});
      return updatedProducts;
    });
  };

  const clearEmptyProducts = () => {
    updateProducts((prevProducts) =>
      Object.entries(prevProducts).reduce(
        (newProducts: Record<string, ProductType>, [productID, product]) => {
          if (product.name || product.price) {
            newProducts[productID] = product; // Mantém os produtos válidos
          }
          return newProducts;
        },
        {}
      )
    );
  };

  const newProduct = () => ({ id: generateId() });

  const addProduct = () => {
    const product = newProduct();
    clearEmptyProducts();
    updateProducts(prev => ({
      ...prev,
      [product.id]: product,
    }));
  };

  const changeProduct = (product: ProductType) => {
    updateProducts(prev => ({
      ...prev,
      [product.id]: product,
    }));
  };

  const removeProduct = (productID: string) => {
    updateProducts(prev => {
      const updatedProducts = { ...prev };
      delete updatedProducts[productID];
      if (Object.keys(updatedProducts).length == 0) {
        const product = newProduct();
        return { [product.id]: product };
      }
      return updatedProducts;
    });
  };

  return {products, addProduct, changeProduct, removeProduct, updateProducts}
};
