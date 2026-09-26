"use client"

import { createContext, useContext, useState } from "react";

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
    setCartItems((currentItem) => {
        let existProduct = currentItem.find((item) => item.id === id);
        if(!existProduct) {
            return [...currentItem, {id, qty: 1}]
        } else {
            return currentItem.map((item) => {
                if(item.id === id) {
                    return {...item, qty: item.qty + 1};
                } else {
                    return item;
                }
            })
        }
    })
  }
  return (
    <ShoppingCartContext.Provider value={{cartItems,handleIncreaseProductQty, getProductQty, cartTotalQty}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
