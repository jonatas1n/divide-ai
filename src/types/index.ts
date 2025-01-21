export type ProductType = {
  id: string;
  name?: string;
  price?: number;
};

export type GuestType = {
  id: string;
  name?: string;
};

export type productCostType = {
  id: string;
  quantity: number,
}

export type CostType = {
  id: string;
  products: Record<string, productCostType>;
  guests: string[];
};
