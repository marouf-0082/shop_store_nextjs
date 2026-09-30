"use client"

import { createContext, useContext, useMemo, useState } from "react";

interface IShoppingCartContextProviderProps {
  children: React.ReactNode;
}

interface ICartItems {
  id: number;
  qty: number;
}

interface IShoppingCartContext {
    cartItems: ICartItems[];
    handleIncreaseProductQty: (id: number) => void;
    getProductQty: (id: number) => number;
    cartTotalQty: number;
    handleDecreaseProductQty: (id: number) => void;
    handleRemoveProduct: (id: number) => void;

}

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartContextProvider({
  children,
}: IShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);

  // Get TotalQty
  const cartTotalQty = cartItems.reduce((total, item)=> {
        return total + item.qty;
    } ,0)
  

   const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
   }

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
        let existProduct = currentItems.find((item) => item.id === id);
        if(!existProduct) {
            return [...currentItems, {id, qty: 1}]
        } else {
            return currentItems.map((item) => {
                if(item.id === id) {
                    return {...item, qty: item.qty + 1};
                } else {
                    return item;
                }
            })
        }
    })
  }

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let isLastOne = currentItems.find((item) => item.id == id)?.qty == 1;

      if(isLastOne) {
        return currentItems.filter((item)=> item.id != id);
      } else {
        return currentItems.map((item) => {
          if(item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            }
          } else {
            return item;
          }
        })
      }
    })
  }

  // Remove product from cart
  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems)=> {
      return currentItems.filter((item)=> item.id != id);
    })
  }
  return (
    <ShoppingCartContext.Provider value={{cartItems,handleIncreaseProductQty, getProductQty, cartTotalQty, handleDecreaseProductQty, handleRemoveProduct}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
