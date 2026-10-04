"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface IShoppingCartContextProviderProps {
  children: React.ReactNode;
}

interface ICartItems {
  id: string;
  qty: number;
}

interface IShoppingCartContext {
  cartItems: ICartItems[];
  handleIncreaseProductQty: (id: string) => void;
  getProductQty: (id: string) => number;
  cartTotalQty: number;
  handleDecreaseProductQty: (id: string) => void;
  handleRemoveProduct: (id: string) => void;
}

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: IShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);

  // Get TotalQty
  const cartTotalQty = cartItems.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const getProductQty = (id: string) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  const handleIncreaseProductQty = (id: string) => {
    setCartItems((currentItems) => {
      let existProduct = currentItems.find((item) => item.id === id);
      if (!existProduct) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: string) => {
    setCartItems((currentItems) => {
      let isLastOne = currentItems.find((item) => item.id == id)?.qty == 1;

      if (isLastOne) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  // Remove product from cart
  const handleRemoveProduct = (id: string) => {
    setCartItems((currentItems) => {
      localStorage.removeItem("cartItems");
      return currentItems.filter((item) => item.id != id);
    });
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    console.log(storedCartItems);
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        getProductQty,
        cartTotalQty,
        handleDecreaseProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
