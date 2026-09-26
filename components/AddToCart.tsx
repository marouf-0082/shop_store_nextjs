"use client"

import { useShoppingCartContext} from "@/context/ShopingCartContext";
interface IAddToCartProps {
    id: string;
}

function AddToCart({id} : IAddToCartProps) {
    const {cartItems, handleIncreaseProductQty, getProductQty} = useShoppingCartContext();
  return (
    <div className="">
      <button onClick={() => handleIncreaseProductQty(parseInt(id))} className="py-1 px-2 rounded-2xl bg-slate-200">+</button>
      <span className="mx-4">{getProductQty(parseInt(id))}</span>
      <button className="py-1 px-2 rounded-2xl bg-slate-200">-</button>
    </div>
  );
}

export default AddToCart;
