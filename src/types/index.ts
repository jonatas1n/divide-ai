export type ProductType = {
  id: string;
  name?: string;
  price?: number;
};

export type GuestType = {
  id: string;
  name?: string;
};

export type CostType = {
  id: string;
  products: Record<
    string,
    {
      productID: string;
      quantity: number;
    }
  >;
  guests: string[];
};
