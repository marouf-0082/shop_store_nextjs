"use client"
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { useShoppingCartContext } from "@/context/ShopingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();
  return (
    <Container>
      <div className="flex mt-6 gap-8">
        <div className="">
          <h2>Cart Item</h2>
          <div className="mt-6 space-y-6 w-5xl">
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id}/>
            ))}
          </div>
        </div>
        <div className="border shadow-md p-4">
          <h3>
            Total: <span>234$</span>
          </h3>
          <h3>
            Tax: <span>23$</span>
          </h3>
          <h3>
            Subtotal: <span>23$</span>
          </h3>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
