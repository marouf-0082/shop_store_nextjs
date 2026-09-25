import Container from "@/components/Container";

function Product() {
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md rounded">
        <div className="col-span-3">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="col-span-9 p-4">
          <h2 className="text-2xl font-bold">Product Title</h2>
          <p className="text-slate-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            distinctio molestiae possimus asperiores, ex dignissimos quasi autem
            voluptatibus cum ullam tempora nostrum nihil? Magni, quia similique
            repudiandae minus voluptatum molestiae.
          </p>
          <p className="text-xl">
            Price: <span>20$</span>
          </p>

          <div className="mt-4">
            <button className="py-1 px-2 rounded-2xl bg-slate-200">+</button>
            <span className="mx-4">3</span>
            <button className="py-1 px-2 rounded-2xl bg-slate-200">-</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Product;
