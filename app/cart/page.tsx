import CartItem from "@/components/CartItem"
import Container from "@/components/Container"

function Cart() {
  return (
    <Container>
      <div className="flex mt-6 gap-8">
        <div className="">
          <h2>Cart Item</h2>
          <div className="mt-6 space-y-6 w-5xl">
            <CartItem/>
            <CartItem/>
            <CartItem/>
          </div>
        </div>
        <div className="border shadow-md w-full p-6">
          <h3>Total: 234$</h3>
          <h3>Tax: 23$</h3>
          <h3>Subtotal: 23$</h3>
        </div>
      </div>
    </Container>
  )
}

export default Cart