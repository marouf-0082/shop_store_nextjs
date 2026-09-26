import AddToCart from "./AddToCart";

function CartItem() {
  return (
    <div className="grid grid-cols-12 bg-slate-100">
      <div className="col-span-2 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600185365778-7875a359b924?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="col-span-10 p-4">
        <h2 className="text-xl font-bold">Product Name</h2>
        <p>count: 3</p>
        <p>
          Price: <span>20$</span>
        </p>
        {/* <AddToCart/> */}
      </div>
    </div>
  );
}

export default CartItem;
