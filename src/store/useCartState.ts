import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductCart } from "./types";

interface cartState {
  produitsInCart: ProductCart[] | [];
  addPrduitToCart: (produits: any, countProduit: number) => void;
  removeProduitFromCart: (produits: ProductCart) => void;
  updateLocalStorage: (cartProduits: ProductCart[]) => void;
}

//@ts-ignore
const initialValue = JSON.parse(localStorage.getItem("cartProduits"));

export const useCartState = create<cartState>()(
  devtools((set, get) => ({
    produitsInCart: initialValue === null ? [] : initialValue,

    addPrduitToCart: (produit, countProduit) => {
      const { produitsInCart, updateLocalStorage } = get();

      const isProductInCart =
        produitsInCart.findIndex((el) => el.id === produit.id) !== -1;

      let updatedProducts;

      if (isProductInCart) {
        updatedProducts = produitsInCart.map((el) => {
          const isTheSameProduct = el.id === produit.id;

          return isTheSameProduct ? { ...produit, countProduit } : el;
        });
      } else {
        updatedProducts = [...produitsInCart, { ...produit, countProduit }];
      }
      updateLocalStorage(updatedProducts);
    },

    removeProduitFromCart: (produit) => {
      const { produitsInCart, updateLocalStorage } = get();
      const newProductsInCart = produitsInCart.filter(
        (el) => el.id !== produit.id
      );
      updateLocalStorage(newProductsInCart);
    },

    updateLocalStorage: (cartProduits: ProductCart[]) => {
      localStorage.setItem("cartProduits", JSON.stringify(cartProduits));
      set({
        produitsInCart: cartProduits,
      });
    },
  }))
);
