export interface iProduct {
  id: number;
  title: string;
  price: number;
}

export interface iCartItem {
  product: iProduct;
  quantity: number;
}

export interface iCartState {
  items: iCartItem[];
}