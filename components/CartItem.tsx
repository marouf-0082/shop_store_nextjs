"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProductItemProps } from "./ProductItem";
import AddToCart from "./AddToCart";
import { formatNuberWithCommas } from "@/utils/number";

interface ICartItemProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItemProps) {
  const [data, setData] = useState({} as IProductItemProps);
  useEffect(() => {
    axios(`http://localhost:3004/product/${id}`).then((res) => {
      const { data } = res;
      setData(data);
    });
  }, []);
  return (
    <div className="grid grid-cols-12 bg-slate-100">
      <div className="col-span-2 rounded-2xl overflow-hidden">
        <img src={data.imageURL} alt={data.title} />
      </div>
      <div className="col-span-10 px-4 py-2">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p>
          count: <span>{qty}</span>
        </p>
        <p>
          Price: <span>{formatNuberWithCommas(data.price ?? 0)}$</span>
        </p>
       <AddToCart id={id}/>
      </div>
    </div>
  );
}

export default CartItem;
