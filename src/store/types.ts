export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  old_price?: number;
  rating: number;
  images: string[];
  category_id: string;
}

export interface ProductCart {
  id: string;
  title: string;
  description: string;
  price: number;
  old_price?: number;
  rating: number;
  images: string[];
  category_id: string;
  countProduit: number;
}
