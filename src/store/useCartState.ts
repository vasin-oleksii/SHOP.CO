import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductCart } from "./types";

interface cartState {
  produitsInCart: ProductCart[] | [];
  addPrduitToCart: (produits: any, countProduit: number) => void;
  removeProduitFromCart: (produits: ProductCart) => void;
}
//@ts-ignore
const initialValue = JSON.parse(localStorage.getItem("cartProduits"));

export const useCartState = create<cartState>()(
  devtools((set, get) => ({
    produitsInCart: initialValue === null ? [] : initialValue,
    addPrduitToCart: (produit, countProduit) => {
      const { produitsInCart } = get();

      const isProductInCart =
        produitsInCart.findIndex((el) => el.id === produit.id) !== -1
          ? true
          : false;

      if (isProductInCart) {
        const updatedProducts = produitsInCart.map((el) => {
          const isTheSameProduct = el.id === produit.id;

          return isTheSameProduct ? { ...produit, countProduit } : el;
        });

        set({
          produitsInCart: updatedProducts,
        });
        localStorage.setItem("cartProduits", JSON.stringify(updatedProducts));
      } else {
        const updatedProducts = [
          ...produitsInCart,
          { ...produit, countProduit },
        ];
        set({
          produitsInCart: updatedProducts,
        });
        localStorage.setItem("cartProduits", JSON.stringify(updatedProducts));
      }
    },
    removeProduitFromCart: (produit) => {
      const { produitsInCart } = get();
      const newProductsInCart = produitsInCart.filter(
        (el) => el.id !== produit.id
      );

      localStorage.setItem("cartProduits", JSON.stringify(newProductsInCart));
      set({
        produitsInCart: newProductsInCart,
      });
    },
  }))
);
