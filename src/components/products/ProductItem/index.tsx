import { useAppContext } from "../../../hooks/Context";
import { ProductType } from "../../../types";
import { ProductForm } from "../ProductForm";
import { ItemStyle } from "../../Item";

type ProductItemProps = {
  product: ProductType;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const { removeProduct } = useAppContext();
  const onRemove = () => removeProduct(product.id);

  return (
    <ItemStyle>
      <ProductForm product={product} />
      <button onClick={onRemove}>DEL</button>
    </ItemStyle>
  )
}
