"use client";

import { useShoppingCartContext } from "@/context/ShopingCartContext";
interface IAddToCartProps {
  id: number;
}

function AddToCart({ id }: IAddToCartProps) {
  const {
    handleIncreaseProductQty,
    getProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();
  return (
    <div>
      <div className="mt-2">
        <button
          onClick={() => handleIncreaseProductQty(id)}
          className="py-1 px-2 rounded-2xl bg-slate-200"
        >
          +
        </button>
        <span className="mx-4">{getProductQty(id)}</span>
        <button
          onClick={() => handleDecreaseProductQty(id)}
          className="py-1 px-2 rounded-2xl bg-slate-200"
        >
          -
        </button>
      </div>

      <div className="mt-2">
        <button
          onClick={() => handleRemoveProduct(id)}
          className="px-4 py-2 rounded bg-red-500 text-white "
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
