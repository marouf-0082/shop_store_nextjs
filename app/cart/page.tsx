"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { useShoppingCartContext } from "@/context/ShopingCartContext";
import { formatNuberWithCommas } from "@/utils/number";
import axios from "axios";
import { useEffect, useState } from "react";

interface IDiscountData {
  id: string;
  code: string;
  percentage: number;
}

function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProductItemProps[]>();
  const [discountCode, setDiscountCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    axios(`http://localhost:3004/product`).then((res) => {
      const { data } = res;
      setData(data);
    });
  }, []);

  let totalPrice = cartItems.reduce((total, item) => {
    let selectedProduct = data?.find(
      (product) => product.id == item.id.toString(),
    );
    return total + (selectedProduct?.price || 0) * item.qty;
  }, 0);

  const handleSubmitDiscount = () => {
    axios(`http://localhost:3004/discounts?code=${discountCode}`).then(
      (result) => {
        const data = result.data as IDiscountData[];

        let discountedPrice = (totalPrice * data[0].percentage) / 100;
        let finalPrice = totalPrice - discountedPrice;
        setFinalPrice(finalPrice);
        setDiscountedPrice(discountedPrice);
      },
    );
  };

const handleSubmitOrder = () => {
    if(!cartItems.length) return alert("Cart is empty");
    
    
    axios({
      method: "POST",
      url: "http://localhost:3004/order",
      data: {
      },
    });
  };
  return (
    <Container>
      <div className="mt-6 gap-8">
        <div className="">
          <h2>Cart Item</h2>
          <div className="mt-6 space-y-6 w-5xl">
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="border shadow-md p-4">
          <h3>
            Total: <span>{formatNuberWithCommas(totalPrice)}$</span>
          </h3>
          <h3>
            Tax: <span>{formatNuberWithCommas(discountedPrice)}$</span>
          </h3>
          <h3>
            Subtotal: <span>{formatNuberWithCommas(finalPrice)}$</span>
          </h3>
          <div>
            <button
              onClick={handleSubmitDiscount}
              className="bg-sky-600 text-white px-4 py-1 rounded"
            >
              Action
            </button>
            <input
              type="text"
              className="border"
              placeholder="Please add Tax CODE"
              onChange={(e) => setDiscountCode(e.target.value)}
            />
          </div>
          <button onClick={handleSubmitOrder} className="px-4 py-1 bg-sky-500 rounded mt-2 text-white">
            Submit Order
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
